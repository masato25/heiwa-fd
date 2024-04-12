#!/bin/sh

sed -i '' 's@=\"/@=\"/prod/op/public/heiwa-fd/build/@g' build/index.html
echo "completed build to aws!!"