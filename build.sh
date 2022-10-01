#!/bin/bash

# copy static websites to public/ dir
mkdir public
cp index.html ./public
cp -r ./02-Udemy/-01-HTML-CSS-Jonas/Projects/* ./public
cp -r ./02-Udemy/-02-Js-Andrew/Projects/* ./public

ls -a ./public