#!/usr/bin/env sh
cd -- $(dirname "$0")
echo $(pwd)
mvim -u my-vimrc main.txt

