import argparse
import csv
import json
import os
import sys
import time

def parse_file(infile):
    summary = []
    with open(infile, newline='') as csvfile:
        print("Parsing", infile)
        reader = csv.DictReader(csvfile)
        lookup = {}
        for row in reader:
            # version,filename,function,offset,length,language
            version = row['version']
            language = row['language']
            length = int(row['length'])
            if version not in lookup:
                lookup[version] = len(summary)
                summary.append({'version': version, 'c': 0, 'total': 0, 'c_functions': 0, 'total_functions': 0})
            idx = lookup[version]
            if language == 'c':
                summary[idx]['c'] += length
                summary[idx]['c_functions'] += 1
            summary[idx]['total'] += length
            summary[idx]['total_functions'] += 1
    return summary

def parse_dir(indir):
    files = sorted(list(filter(lambda x: x.endswith('.csv'), os.listdir(indir))))
    summary = []
    for filename in files:
        filename_split = filename.split('.')
        if len(filename_split) != 3:
            git_hash = "foo"
            commit_date = int(time.time())
        else:
            git_hash, commit_date, _ = filename_split
            commit_date = int(commit_date)

        summary.append({
            'date': commit_date,
            'hash': git_hash,
            'summary': parse_file(os.path.join(indir, filename))
        })
    # sort based on date to save doing it in javascript
    summary = sorted(summary, key = lambda x: x['date'])
    return { 'summary' : summary }


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Process progress csvs into a summary json file',
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('indir', type=str,
                        help="source directory containing progress CSV file(s)")
    parser.add_argument('outfile', type=argparse.FileType('w'),
                        help='file to output json summary to')
    args = parser.parse_args()
    json.dump(parse_dir(args.indir), args.outfile)