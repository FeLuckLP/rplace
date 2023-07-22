#!/bin/zsh
git add pictures/* config.toml \
  && git commit -m "$1" \
  && git reset HEAD --hard \
  && git pull --rebase \
  && git push \
  && python3 scripts/generate_json.py \
  && python3 scripts/render_json.py
