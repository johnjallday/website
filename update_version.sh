#!/bin/bash

# Function to increment version
increment_version() {
    echo "$1" | awk -F. -v OFS=. '{$NF = $NF + 1; print}'
}

# Read current version from package.json
current_version=$(grep -Po '"version": "\K[0-9.]+(?=")' package.json)

# Increment version
new_version=$(increment_version $current_version)

# Replace the version in package.json
sed -i "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" package.json

# Git commit and push
git add .
git commit -m "v$new_version"
git push

