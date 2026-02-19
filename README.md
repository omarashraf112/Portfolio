# Personal Brand Website — Freelance .NET Backend Developer

A premium, mobile-first personal brand website for a freelance back-end .NET developer. Built with HTML5, CSS3, JavaScript, and Tailwind CSS.

## 🎯 Brand positioning

- **Professional problem solver** — trusted backend engineer and long-term partner
- **Target clients:** Startups, SaaS founders, SMBs, international freelance clients
- **Tone:** Confident, clean, reliable, technical but business-oriented

## 📁 Project structure

```
personal-brand-website/
├── index.html          # Single-page site (all sections)
├── css/
│   └── custom.css      # Custom styles + Tailwind overrides
├── js/
│   └── main.js         # Nav, mobile menu, form, scroll animations
├── assets/
│   └── cv/             # Place your PDF here (e.g. your-cv.pdf)
└── README.md
```

## ⚙️ Customization

Before going live, update these in `index.html`:

| Item | Where | Example |
|------|--------|--------|
| **Your name** | Nav logo, footer, meta author | Replace "Your Name" / "YourName" |
| **Headline & sub-headline** | Hero section | Already written; tweak if needed |
| **About copy** | `#about` section | Replace with your story |
| **Project links** | `#projects` | GitHub URLs, demo URLs |
| **CV file** | `#cv` section | `assets/cv/your-cv.pdf` |
| **Phone** | Contact section | `tel:+1234567890` and display text |
| **LinkedIn** | Contact + footer | Your profile URL |
| **GitHub** | Contact + footer | Your profile URL |
| **Email** | Contact + footer + form | `mailto:hello@yourdomain.com` |
| **Meta description / keywords** | `<head>` | SEO copy |

To change the **accent color** (default: sky blue), edit the `tailwind.config` in `index.html`:

```js
colors: {
  accent: { DEFAULT: '#0ea5e9', light: '#38bdf8', dark: '#0284c7' },
  // e.g. purple: DEFAULT: '#8b5cf6', light: '#a78bfa', dark: '#6d28d9'
}
```

Then replace `accent` class usages or keep the same class and only change the hex values.

## 🚀 Running locally

1. Open the folder in your editor.
2. Use a simple local server (recommended so paths work as in production):
   - **VS Code:** Install "Live Server" and "Open with Live Server" on `index.html`.
   - **Node:** `npx serve .` then open the URL shown.
   - **Python:** `python -m http.server 8000` then open `http://localhost:8000`.
3. Or open `index.html` directly in the browser (some features may differ without a server).

## 📤 Deployment

- **Netlify / Vercel:** Drag the project folder or connect your repo; set publish directory to the project root. No build step needed.
- **GitHub Pages:** Push to a repo, enable Pages, choose branch (e.g. `main`) and root folder.
- **Any static host:** Upload the contents of `personal-brand-website/` (keep the same structure).

## 📬 Contact form

The form is client-side only (validation + success message). To receive emails:

- **Formspree:** Create a form, set `form.action` to your Formspree endpoint and use `method="POST"` in `main.js` or in the HTML form.
- **Netlify Forms:** Add `netlify` attribute to the form and deploy on Netlify.
- **Your own API:** Point the form to your backend endpoint and handle submit in `main.js` (e.g. `fetch()`).

## ✅ Included

- Semantic HTML5, SEO-friendly meta tags
- Skip link and ARIA where relevant
- Mobile-first, responsive layout
- Tailwind CSS (CDN), dark theme, accent color
- Smooth scroll, header scroll effect, mobile menu
- Basic form validation and success feedback
- Fade-in on scroll for project cards
- Print-friendly styles
- `prefers-reduced-motion` respected

## 📄 License

Use and modify for your personal brand. No attribution required.
