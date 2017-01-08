#!/bin/sh
#
# Shell script for creating post 
# based on jekyll's layout format

# get created date
date=`date +%Y-%m-%d`
datetime=`date "+%Y-%m-%d %H:%M:%S"`

# get file title from command line
read -p "Post Title: " title
read -p "Categories: " category

filetitle=$(echo ${title// /-} | tr '[:upper:]' '[:lower:]')

# create file title
filepath=_posts/$date-$filetitle.md

# create folder
touch $filepath

# write default layout to the file
echo '---' >> $filepath
echo 'layout: post' >> $filepath
echo 'title: '$title >> $filepath
echo 'date: '$datetime >> $filepath
echo 'categories: '$category >> $filepath
echo 'type: "posts"' >> $filepath
echo '---' >> $filepath
