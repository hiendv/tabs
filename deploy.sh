#!/bin/bash

if [ "$1" == "" ]; then
    echo "Missing commit message" 1>&2
    exit 1
fi

# abort on errors
set -e

# build:vue
export GH_PAGES=true; npm run build:vue

cd packages/vue-tabs-example/dist

git init
git add -A
git commit -m "$1"
git push -f git@github.com:hiendv/tabs.git master:gh-pages

cd -
