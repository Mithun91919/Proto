#!/usr/bin/env bash
# Regenerates public/Mithun-Raju-Resume.pdf from the /resume page, using the
# print layout. Needs the dev server running (npm run dev) and Google Chrome.
# Run it again whenever src/content/resume.ts changes.
set -euo pipefail
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
URL="${RESUME_URL:-http://localhost:3000/resume}"
OUT="$(dirname "$0")/../public/Mithun-Raju-Resume.pdf"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="$OUT" "$URL" >/dev/null 2>&1
echo "Wrote $OUT"
