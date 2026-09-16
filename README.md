# AndyLinnn100.github.io

Personal blog built with [Hugo](https://gohugo.io/), deployed to GitHub
Pages via GitHub Actions (`.github/workflows/hugo.yaml`).

> **Theme: TBD.** The site currently has no theme and will not render
> properly until one is added under `themes/` and set in `hugo.toml`.

## Local development

    hugo server -D    # live-reload dev server, includes drafts
    hugo new posts/my-post.md    # scaffold a new post from the archetype

## Deploy

Pushing to `main` triggers the CI workflow, which builds the site
(`hugo --gc --minify`) and publishes `public/` to GitHub Pages.
