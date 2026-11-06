# TODO

## Before launch

- [ ] **Real site title** — set per-language `title` in `hugo.toml`
      (currently the "My New Hugo Site" placeholder, in three places:
      root `title` and both `[languages.*]` blocks)
- [ ] **Favicon** — add `static/favicon.ico`, then set
      `theme_config.favicon = 'favicon.ico'` in `hugo.toml`
- [ ] **Intro/footer wording** — replace placeholder strings in
      `i18n/en.yaml` and `i18n/zh-tw.yaml` (`homepage.intro`,
      `homepage.moreintro`, `homepage.footer`, `rss.*`)
- [ ] **First real post pair** — `hugo new posts/my-post.en.md` +
      `my-post.zh-tw.md` (same basename = linked translations), then
      delete the `hello-world` placeholder drafts

## Nice to have

- [ ] **Exclude theme demo content locally** — theme ships example posts
      (drafts) that clutter `hugo server -D`; excludeable by redeclaring
      theme module mounts (drop its `content` mount) in `hugo.toml`.
      Production builds are unaffected (CI builds without `-D`)
- [ ] **CI Hugo version** — when bumping `HUGO_VERSION` in
      `.github/workflows/hugo.yaml`: the theme's `css.Sass` uses the
      deprecated libsass; the workflow already installs Dart Sass, but
      verify the build after upgrading
- [ ] **Font stack** — `assets/css/custom.css` pins
      `Noto Sans Mono CJK TC` first so EN/ZH pages render identically.
      Do NOT reorder to Latin-first (browsers select fonts per text run;
      see comment in the file)
