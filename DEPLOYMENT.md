# Deployment Guide: Aqua Care UAE

This project is optimized for production deployment on **Netlify** or **Vercel**.

## 🚀 Deployment to Netlify

1. Connect your GitHub repository: `https://github.com/aqua08432-debug/aqua-care-uae.git`.
2. Configure **Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Netlify will automatically deploy every time you push to the `main` branch.

## 🚀 Deployment to Vercel

1. Import your repository into the Vercel Dashboard.
2. Select **Vite** as the Framework Preset (Vercel should auto-detect this).
3. Ensure **Build Command** is `npm run build` and **Output Directory** is `dist`.
4. Vercel will enable automatic previews for PRs and production deploys for the `main` branch.

## 📈 Performance & SEO

The project is pre-configured with:

- **Schema.org JSON-LD** for Local Business, Products, and Breadcrumbs.
- **Open Graph & Twitter Meta Tags** for rich social sharing.
- **Image Lazy Loading** and explicit dimensions to prevent layout shifts.
- **Font Optimization** using `font-display: swap`.

## 🛠 Project Structure

- `lib/`: Centralized data and constants.
- `layout/`: Reusable site-wide components.
- `features/`: Specific page features like WhatsApp integration.
- `styles/`: Optimized Tailwind 4 configuration.
