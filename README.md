# Flux Landing (static build)

This repo contains a static export of the Flux Payments landing page.

## Local preview
Open `index.html` in a browser or run a static server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy to GitHub Pages
1. Create a repo and push these files.
2. In GitHub → Settings → Pages → set **Branch: `main`** and **Root**.
3. Your site will be available at `https://<user>.github.io/<repo>/`.

All assets live under `./Flux_files/` and paths are already wired for relative hosting.
