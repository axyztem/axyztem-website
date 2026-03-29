# Axyztem Website - Static Site

This is a **static website** for Axyztem showcasing products, company information, and contact forms.  
It includes:

- `index.html` - Homepage
- `products.html` - Products overview
- `dinger.html` - Dinger product page
- `about.html` - About the company
- `contact.html` - Contact form
- `css/style.css` - Styles for all pages
- `js/main.js` - Basic JS for future interactivity
- `images/` - Placeholder images

---

## Deployment Instructions

We recommend **GitHub Pages** + **Cloudflare Pages** for zero-cost deployment.

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com/) and create a new repository.
2. Name it e.g. `axyztem-website`.
3. Initialize with `README.md` (optional).

### Step 2: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit of Axyztem website"
git branch -M main
git remote add origin https://github.com/USERNAME/axyztem-website.git
git push -u origin main