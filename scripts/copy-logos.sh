#!/bin/sh
# Copies project logos from the sibling repos in ~/dev and shrinks them to at most 256px.
set -eu

DEV="$HOME/dev"
OUT="assets/images/logos"
MAX_SIDE=256
mkdir -p "$OUT"

copy_png() {
  source="$1"
  target="$OUT/$2"
  longest=$(sips -g pixelWidth -g pixelHeight "$source" | awk '/pixel/ { print $2 }' | sort -n | tail -1)
  if [ "$longest" -gt "$MAX_SIDE" ]; then
    sips -s format png -Z "$MAX_SIDE" "$source" --out "$target" >/dev/null
  else
    sips -s format png "$source" --out "$target" >/dev/null
  fi
  echo "$target"
}

copy_png "$DEV/andara-dashboard/dist/logo-rentify.png" rentify.png
copy_png "$DEV/nexora/public/logos/nexora-mark.png" nexora.png
copy_png "$DEV/kardex/assets/images/logo-k.png" kardex.png
copy_png "$DEV/duopay/public/logo-duopay.png" duopay.png
copy_png "$DEV/andara-dashboard/dist/logo.png" andara.png
cp "$DEV/exchange-chronicle/public/favicon.svg" "$OUT/exchange-chronicle.svg"
echo "$OUT/exchange-chronicle.svg"
