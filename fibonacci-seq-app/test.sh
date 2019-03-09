#!/bin/bash

my_array=(foo bar 1 2 3 4)

for i in "${my_array[@]}"; do echo "$i"; done
