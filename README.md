# conker-website

## Docker Quickstart

```sh
docker run --rm -ti -v $(pwd):/app -p 3000:3000 -p 35729:35729 -u $UID node:15 sh
cd /app && HOST=0.0.0.0 npm start
```
