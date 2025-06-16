#!/bin/bash

# This script can be used to generate PNG icons from the SVG icon
# Requires ImageMagick or similar tool

echo "To generate PNG icons from the SVG, you can use:"
echo ""
echo "# Using ImageMagick:"
echo "convert -background transparent -resize 192x192 public/icon.svg public/icon-192.png"
echo "convert -background transparent -resize 512x512 public/icon.svg public/icon-512.png"
echo "convert -background transparent -resize 180x180 public/icon.svg public/apple-icon.png"
echo ""
echo "# Using rsvg-convert:"
echo "rsvg-convert -w 192 -h 192 public/icon.svg > public/icon-192.png"
echo "rsvg-convert -w 512 -h 512 public/icon.svg > public/icon-512.png"
echo "rsvg-convert -w 180 -h 180 public/icon.svg > public/apple-icon.png"
echo ""
echo "# For favicon.ico, you can use:"
echo "convert public/icon.svg -define icon:auto-resize=64,48,32,16 app/favicon.ico"