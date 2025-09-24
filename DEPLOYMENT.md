# Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from your project directory
vercel

# Follow the prompts to link your project
```

### Option 2: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Vite project
6. Click "Deploy"

## Configuration Files Added

- `vercel.json` - Vercel configuration with optimized settings
- `.vercelignore` - Files to ignore during deployment

## Build Settings (Auto-detected by Vercel)
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Features Configured
- ✅ SPA routing (all routes redirect to index.html)
- ✅ Static asset caching (1 year for images, fonts, etc.)
- ✅ Optimized build output
- ✅ Node.js 18.x runtime for any API functions

## Environment Variables (if needed)
If you need environment variables:
1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add your variables there

## Custom Domain (optional)
1. Go to your Vercel project dashboard
2. Navigate to Settings > Domains
3. Add your custom domain
4. Follow DNS configuration instructions

Your portfolio is now ready for Vercel deployment! 🚀
