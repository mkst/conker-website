import argparse
import csv
import json
import os
import sys
import time


def format_progress(progress):
    res = []

    for version, version_sections in progress.items():
        summary = {
            "section": "all",
            "c": 0,
            "total": 0,
            "c_functions": 0,
            "total_functions": 0,
        }
        sections = []

        for section, version_section in version_sections.items():
            version_section["section"] = section
            percent = 100 * version_section["c"] / version_section["total"]
            version_section["percent"] = float(f'{percent:.4f}')
            summary["c"] += version_section["c"]
            summary["total"] += version_section["total"]
            summary["c_functions"] += version_section["c_functions"]
            summary["total_functions"] += version_section["total_functions"]
            sections.append(version_section)

        percent = 100 * summary["c"] / summary["total"]
        summary["percent"] = float(f'{percent:.4f}')
        sections.append(summary)

        res.append({
            "version": version,
            "sections": sections
        })

    return res

def parse_file(infile, filter_version=None, filter_section=None):
    progress = {}

    with open(infile, newline='') as csvfile:
        print('Parsing', infile)
        reader = csv.DictReader(csvfile)
        # version,section,filename,function,offset,length,language
        for row in reader:
            # SANITY: protect against concatenated input
            if row['version'] == 'version':
                continue
            version = row['version']
            # SANITY: old summaries only include game section
            section = row.get('section', 'game')
            # skip
            if filter_version and version != filter_version:
                continue
            if filter_section and section != filter_section:
                continue
            # setup dictionaries
            if not version in progress.keys():
                progress[version] = {}
            if not section in progress[version].keys():
                progress[version][section] = {
                    'c': 0,
                    'total': 0,
                    'c_functions': 0,
                    'total_functions': 0
                }
            # process the row data
            language = row['language']
            length = int(row['length'])
            if language == 'c':
                progress[version][section]['c'] += length
                progress[version][section]['c_functions'] += 1
            progress[version][section]['total'] += length
            progress[version][section]['total_functions'] += 1
    return progress

def parse_dir(indir, filter_version='all', filter_section='all'):
    files = sorted(list(filter(lambda x: x.endswith('.csv'), os.listdir(indir))))
    commits = []
    for filename in files:
        filename_split = filename.split('.')
        if len(filename_split) != 3:
            git_hash = 'foo'
            commit_date = int(time.time())
        else:
            git_hash, commit_date, _ = filename_split
            commit_date = int(commit_date)

        commits.append({
            'date': commit_date,
            'hash': git_hash,
            'progress': format_progress(parse_file(os.path.join(indir, filename), filter_version, filter_section)),
        })
    # sort based on date to save doing it in javascript
    return list(sorted(commits, key = lambda x: x['date']))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Process progress csvs into a summary json file',
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('indir', type=str,
                        help='source directory containing progress CSV file(s)')
    parser.add_argument('outdir', type=str,
                        help='directory to output json summary to')
    parser.add_argument('--version', type=str,
                        help='optional version filter (e.g us/eu/debug/ects)')
    parser.add_argument('--section', type=str,
                        help='optional section filter (e.g init/game/debugger)')
    args = parser.parse_args()

    commits = parse_dir(args.indir, args.version, args.section)
    commits_filename = os.path.join(args.outdir, 'commits.json')
    with open(commits_filename, 'w') as o:
        print(f'Writing {commits_filename}')
        json.dump({'commits': commits}, o)
    if len(commits) > 0:
        latest = commits[-1]
        latest_filename = os.path.join(args.outdir, 'latest.json')
        print(f'Writing {latest_filename}')
        with open(latest_filename, 'w') as o:
            json.dump(latest, o)
