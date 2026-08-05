# conwayspringsfallfest# Conway Springs Fall Festival 2026

Event site for the Conway Springs Fall Festival — **Saturday, September 26, 2026**.
Theme: *A Renaissance Harvest*.

Static HTML/CSS/JS. No build step, no dependencies.

## Structure

```
index.html        # the whole page
css/styles.css    # all styling
js/main.js        # scroll-reveal only
images/           # festival photos (see below)
```

## Adding photos

The layout is photo-led. Five image slots are defined as CSS variables at the
top of `css/styles.css`:

```css
--csff-img-hero:     url('');   /* wide festival crowd shot */
--csff-img-together: url('');   /* booths under trees */
--csff-img-card-1:   url('');   /* schedule / stage */
--csff-img-card-2:   url('');   /* parade */
--csff-img-card-3:   url('');   /* craft booths */
```

Drop photos into `images/` and fill in the paths, e.g.
`url('../images/hero.jpg')` — note the `../` since the CSS lives one folder down.

Until they're filled in, each slot shows an amber gradient placeholder so
nothing looks broken. The hero needs a horizontal shot with the action on the
**right** side; the left half sits under a cream gradient behind the headline.

## Content still to fill in

Search the repo for these two markers:

- `<!-- EDIT -->` — placeholder copy (hours, address, route, fees, sponsors)
- `#REPLACE-LINK` — dead links (forms, PDFs, donation page, social, contact)

## Local preview

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploying

Any static host works — GitHub Pages, Netlify, Vercel. No configuration needed.

## Note on the `.csff` prefix

Every class is namespaced `.csff__*` and everything sits inside a single
`<div class="csff">`. That's so the same markup can be pasted into a Drupal
node without colliding with the site theme. Keep the wrapper if you want the
standalone site and the Drupal version to stay in sync.

## Accessibility

Skip link, semantic landmarks, labeled image regions, visible focus rings, and
`prefers-reduced-motion` support. Please keep these intact when editing.