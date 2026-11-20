#!/usr/bin/env bash
# Quick PNG export from SVGs using Inkscape CLI
# Run: bash export-pngs.sh

set -e

INKSCAPE=$(command -v inkscape || echo "/usr/bin/inkscape")
OUTDIR="exported-pngs"
mkdir -p "$OUTDIR"

echo "Exporting SVGs to PNG..."

# Services showcase - full HD for portfolio
"$INKSCAPE" services-showcase.svg \
  --export-type=png \
  --export-filename="$OUTDIR/services-showcase.png" \
  --export-dpi=150
echo "✓ services-showcase.png"

# Fiverr gallery banner - 1280x769 (Fiverr recommended)
"$INKSCAPE" fiverr-gallery-banner.svg \
  --export-type=png \
  --export-filename="$OUTDIR/fiverr-gallery-banner.png" \
  --export-dpi=96
echo "✓ fiverr-gallery-banner.png"

# Upwork thumbnail - 800x800
"$INKSCAPE" upwork-thumbnail.svg \
  --export-type=png \
  --export-filename="$OUTDIR/upwork-thumbnail.png" \
  --export-dpi=96
echo "✓ upwork-thumbnail.png"

echo ""
echo "All PNGs exported to: $OUTDIR/"
ls -lh "$OUTDIR/"