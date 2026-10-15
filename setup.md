# Setup Checklist

A checklist for the first-time customization. See [README.md](README.md) for context and [CUSTOMIZATION.md](CUSTOMIZATION.md) for details.

## 1. Identity

- [X] `index.html` — replace name, pronunciation, bio, news items, contact links
- [x] `cv.html` — update education entries and the contact bar
- [x] `site-shell.js` — `FOOTER_SOCIALS` (your social URLs) and `getFooterCopy()` (your copyright name)
- [x] All HTML files — `<title>`, `<meta>`, Open Graph, Twitter Card, JSON-LD (in `index.html`)

## 2. Content (`data.js`)

- [x] Replace the sample publication with your own
- [x] Replace the sample project with your own (set `demoPath` to a real image)
- [x] Update `researchExperience`, `teaching`, `academicServices`, `talks`, `honors`
- [x] Mark featured items with `isSelected: true` so they show on the homepage and CV

## 3. Blog (`blog-data.js`, `blogs/`)

- [x] Add your `.md` posts to `blogs/`
- [x] Register them in `blogPosts` (`blog-data.js`)
- [x] Or remove the Blogs nav entry in `site-shell.js` if you don't want a blog

## 4. Photography

- [x] Drop your photos into `photos/`
- [x] Edit the `<div class="photo-item">` blocks in `photography.html`
- [x] Or remove the Photography nav entry in `site-shell.js` if you don't want it

## 5. Assets

- [x] `figures/me.jpg` — your profile photo (square, ~400×400 looks great)
- [ ] `figures/logo.png` — favicon
- [x] `files/CV.pdf` — your CV
- [ ] `photos/project-demo/*.png` — one image per project, referenced via `demoPath`

## 6. SEO

- [x] `sitemap.xml` — replace `yourwebsite.com`
- [x] `robots.txt` — replace the sitemap URL
- [x] Confirm `og:url`, `og:image`, and JSON-LD `url` use your real domain

## 7. Deploy

- [x] Repo is named `yourusername.github.io`
- [x] GitHub Pages enabled (Settings → Pages → Source: Deploy from branch → `main`)
- [x] Visit `https://yourusername.github.io` and verify
  - Profile + photo render
  - Nav toggles dark mode
  - Publications, Projects, CV all populated
  - Blog list loads (if used) and a single post opens via `blog-post.html?id=...`
  - Photography lightbox opens

## 8. Smoke test

- [x] All external links open in a new tab
- [x] CV PDF link opens
- [x] Mobile layout looks correct (DevTools → Responsive)
- [x] Dark mode preference persists across reloads

That's it — you're live.
