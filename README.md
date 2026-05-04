# 31 Nunhead Green — Guest Guide

A mobile-friendly Jekyll site for guests staying at 31 Nunhead Green, modelled on
[the Bristol guest guide](https://vdovkn.github.io/bristol-guest-guide-site/).

## Structure

```
.
├── _config.yml              # Jekyll config
├── _layouts/default.html    # Shared HTML wrapper
├── _includes/
│   ├── header.html          # Sticky nav with section links + lang switcher
│   └── footer.html
├── _data/i18n.yml           # All translatable UI strings (nav, footer, etc.)
├── assets/
│   ├── css/style.css        # All styling
│   ├── js/main.js           # Copy-to-clipboard
│   └── images/              # SVG illustrations
├── index.html               # English page (main content)
├── fr/index.html            # French stub
├── es/index.html            # Spanish stub
├── Gemfile
└── README.md
```

## Run locally

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

## Edit the content

- **House info, places, day-out ideas:** edit `index.html` directly. It's plain HTML
  inside Jekyll's front matter, no Liquid magic needed beyond the include of the
  two SVG illustrations.
- **Nav labels, footer text, language strings:** edit `_data/i18n.yml`.
- **Colours, fonts, spacing:** edit the `:root` CSS variables in `assets/css/style.css`.
- **Illustrations:** the two SVGs in `assets/images/` are inline-able and themeable —
  every colour matches the CSS palette, so they'll feel consistent if you tweak it.

## Deploy: GitHub Pages

1. Create a new public repo (e.g. `nunhead-guest-guide`).
2. Push these files to `main`.
3. Repo Settings → Pages → Source: `main` branch, `/` (root). Save.
4. Wait ~1 min. Site lives at `https://<your-username>.github.io/nunhead-guest-guide/`.

> **Privacy:** GitHub Pages on free/Pro plans is always public. The `<meta name="robots" content="noindex">`
> tag stops it appearing in Google, but anyone with the URL can read it. That's why
> Wi-Fi password and key box code live in WhatsApp, not in this repo.

## Deploy: Cloudflare Pages with Access (gated)

If you want the site behind an email-allowlist (guests get a one-time code by email):

1. Push the repo to GitHub as above (can be private — Cloudflare can read private repos).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build settings:
   - Framework: **Jekyll**
   - Build command: `bundle exec jekyll build`
   - Build output: `_site`
4. After first deploy, go to Zero Trust → Access → Applications → Add → Self-hosted.
   Point it at the Pages URL, set policy to "Emails" with your guests' addresses.
5. Done. Guests visit the URL, enter their email, get a one-time code, get 24h access.

Free Cloudflare plan covers up to 50 Access users.

## Adding new guests / favourites

Just open `index.html`, find the relevant `<div class="place">…</div>` block, copy/paste,
and edit. Same for the day-out cards under `#explore`.

## Translations

`_data/i18n.yml` controls nav and footer strings. To do a full translation, copy
the body of `index.html` into `fr/index.html` (and `es/index.html`) and translate
the visible content. The `lang: fr` front-matter triggers the French UI strings.
