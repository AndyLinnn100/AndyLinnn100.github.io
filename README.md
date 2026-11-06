# AndyLinnn100.github.io

Personal blog built with [Hugo](https://gohugo.io/), deployed to GitHub
Pages via GitHub Actions (`.github/workflows/hugo.yaml`).

Theme: [somestyleplease](https://github.com/004822/somestyleplease) (as a
git submodule) — minimal, multilingual, no-JS-gallery descendant of
no-style-please.

Open tasks live in [TODO.md](TODO.md).

## File structure

```
.
├── hugo.toml                    # site config: languages, permalinks, theme params, markup
├── TODO.md                      # open tasks
├── archetypes/                  # scaffolds used by `hugo new`
├── assets/                      # files processed by Hugo's pipeline
│   ├── css/custom.css           # font override — unified EN/ZH stack (Noto Sans Mono CJK TC first)
│   └── js/appearance-toggle.js  # ◐ light/dark/auto cycle, persisted in localStorage
├── content/
│   ├── pages/                   # standalone pages (about) — front matter `navbar = true` → header nav
│   └── posts/                   # blog posts; .en.md/.zh-tw.md basename pairs = linked translations
├── i18n/                        # per-language UI strings (root files shadow the theme's)
├── layouts/                     # template overrides, shadowing theme files by same path
│   ├── partials/head.html       # loads custom.css, toggle JS, busuanzi script
│   └── posts/single.html        # last-modified stamp + per-post view counter
├── static/                      # (not yet created) copied verbatim — favicon goes here
├── themes/somestyleplease/      # theme as git submodule — keep pristine, override from root
└── .github/workflows/hugo.yaml  # CI: build & deploy to GitHub Pages on push to main
```

## Languages

English at `/`, Traditional Chinese (正體中文) at `/zh-tw/`. Content files
pair up by basename: `my-post.en.md` + `my-post.zh-tw.md` are linked
translations. UI strings live in root `i18n/en.yaml` and `i18n/zh-tw.yaml`.

## Site-level customizations (theme stays pristine)

- `layouts/posts/single.html` — last-modified stamp (`enableGitInfo`) +
  per-post busuanzi view counter
- `layouts/partials/head.html` — loads `assets/css/custom.css` (font) and
  `assets/js/appearance-toggle.js` (light/dark/auto cycle, persisted) +
  busuanzi script; site-wide counter is in the `homepage.footer` i18n strings
- `hugo.toml` — all params, languages, permalinks (short URLs: `/my-post/`)

## Local development

    hugo server -D                  # dev server, includes drafts
    hugo new posts/my-post.en.md    # scaffold a post (add .zh-tw.md twin)

## Updating the theme

    cd themes/somestyleplease && git fetch && git checkout <tag-or-sha>
    cd ../.. && git add themes/somestyleplease && git commit

## Deploy

Pushing to `main` triggers CI, which builds and publishes `public/` to
GitHub Pages. Transient deploy failures ("deployment_queued" → timeout)
are GitHub Pages infra hiccups — re-run the job.
