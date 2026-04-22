# DigitalStoneAI Studio Portfolio

Static portfolio foundation for DigitalStoneAI Studio / Jay.

## Local Preview

Open `index.html` in a browser from the repository root.

No build step is required for the current static version.

## Structure

- `index.html` - homepage foundation
- `projects/` - Case Studies index page
- `case-studies/` - active data-rich case study routes
- `links/` - contact and profile links page
- `resume/` - static resume page with PDF view/download links
- `background/` - informal background and experience story
- `contact/` - dedicated Formspree project contact form
- `assets/css/styles.css` - shared design system and layout styles
- `assets/js/main.js` - mobile navigation and reveal behavior
- `assets/images/logo1.png` - site logo asset
- `assets/images/linedkinlogo.jpg` and `assets/images/instalogo.avif` - social link icons
- `_source/` - local planning/source material, ignored for deploy

## GitHub Pages

This site is designed to publish directly from the repository root with GitHub Pages.
All internal asset paths are relative so the site can work from a project repository URL.

Recommended GitHub Pages settings:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

The site does not require npm, a bundler, or a build command. GitHub Pages can serve the files directly.

Publishing checklist:

1. Push this folder to a GitHub repository.
2. In GitHub, open `Settings` -> `Pages`.
3. Select `Deploy from a branch`.
4. Choose `main` and `/ (root)`.
5. Save and wait for GitHub Pages to publish the site URL.

Deployment-ready support files:

- `.nojekyll` keeps GitHub Pages from processing the site with Jekyll.
- `404.html` provides a simple fallback page.
- `sitemap.xml` and `robots.txt` support crawler discovery for the static site.
- `.gitignore` excludes OS/editor noise and future local build folders.

## Content Update Checklist

- Replace `assets/images/logo1.png` if a revised logo is supplied.
- Update the GitHub repository hub link in `links/index.html` if the public profile URL changes.
- Replace `AIResume.pdf` when a revised formal resume is supplied.
- Replace the Formspree endpoint in `contact/index.html` if the production form ID changes.
- Refine case study copy, tables, metrics, or visuals in each active `case-studies/*/index.html` route as new proof becomes available.

## Deployment Notes

- Commit the site files from this folder to the repository root.
- Keep source-only planning files in `_source/`; `.gitignore` excludes that folder from deploy.
- Keep image assets under `assets/images/`; root duplicate image files are not needed.
- The public contact form uses Formspree and lets Formspree handle the post-submit response.
