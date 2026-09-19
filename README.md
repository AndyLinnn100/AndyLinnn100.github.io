# AndyLinnn100.github.io

Personal blog built with [Hugo](https://gohugo.io/), deployed to GitHub
Pages via GitHub Actions (`.github/workflows/hugo.yaml`).

Theme: [somestyleplease](https://github.com/004822/somestyleplease) (as a
git submodule) — minimal, multilingual, no-JS-gallery descendant of
no-style-please.

## Languages

English at `/`, Traditional Chinese (正體中文) at `/zh-tw/`. Content files
pair up by basename: `my-post.en.md` + `my-post.zh-tw.md` are linked
translations. UI strings live in root `i18n/en.yaml` and `i18n/zh-tw.yaml`.

## Site-level customizations (theme stays pristine)

- `layouts/posts/single.html` — last-modified stamp (`enableGitInfo`) +
  per-post busuanzi view counter
- `layouts/partials/head.html` — loads `assets/js/appearance-toggle.js`
  (light/dark/auto cycle, persisted) + busuanzi script; site-wide counter
  is in the `homepage.footer` i18n strings
- `hugo.toml` — all params, languages, permalinks (short URLs: `/my-post/`)

## Local development

    hugo server -D                  # dev server, includes drafts
    hugo new posts/my-post.en.md    # scaffold a post (add .zh-tw.md twin)

## Updating the theme

    cd themes/somestyleplease && git fetch && git checkout <tag-or-sha>
    cd ../.. && git add themes/somestyleplease && git commit

## Deploy

Pushing to `main` triggers CI, which builds and publishes `public/` to
GitHub Pages.

## TODO before launch

- set real site title (per-language `title` in `hugo.toml`)
- add `static/favicon.ico`
- write intro/footer wording in `i18n/`
- replace draft placeholder posts with real content
