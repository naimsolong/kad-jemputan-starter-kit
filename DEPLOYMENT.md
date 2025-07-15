# Cloudflare Pages Deployment Guide

This guide will walk you through manually deploying this Nuxt.js wedding invitation application to Cloudflare Pages.

## Prerequisites

- A Cloudflare account
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js and npm installed locally

## Project Setup

This project is a Nuxt 3 application with the following configuration:
- **Framework**: Nuxt 3.6.1
- **Styling**: TailwindCSS
- **Dependencies**: Moment.js for date handling
- **Build Command**: `npm run build`
- **Output Directory**: `.output/public`

## Deployment

1. **Push your code to a Git repository**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create a Cloudflare Pages project**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** in the sidebar
   - Click **Create a project**
   - Choose **Connect to Git**

3. **Connect your repository**
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Cloudflare to access your repositories
   - Select this repository (`kad-jemputan-kahwin`)

4. **Configure build settings**
   ```
   Project name: kad-jemputan-kahwin
   Production branch: main
   Build command: npm run build
   Build output directory: .output/public
   Root directory: (leave empty)
   ```

5. **Environment variables**
   - Add any environment variables in the **Environment variables** section
   - For this project, please refer to [Environment Variables Setup Guide page](ENV_SETUP.md)

6. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will automatically build and deploy your site
   - You'll get a `*.pages.dev` URL for your deployed site

## Custom Domain (Optional)

1. **Add a custom domain**
   - In your Pages project dashboard
   - Go to **Custom domains**
   - Click **Set up a custom domain**
   - Enter your domain name
   - Follow the DNS configuration instructions

2. **SSL Certificate**
   - Cloudflare automatically provisions SSL certificates
   - Your site will be available over HTTPS

## Environment Variables

For this wedding invitation project, you may want to add:
```
NODE_VERSION=18
NPM_VERSION=latest
```

## Automatic Deployments

With Git integration:
- Every push to your production branch triggers a new deployment
- Pull requests create preview deployments
- Rollback to previous deployments is available in the dashboard

## Performance Optimization

- Cloudflare's global CDN automatically caches your static assets
- Images and fonts are optimized automatically
- Enable **Always Online** for better reliability

## Support
Create new issue if you having a problem.

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Nuxt Cloudflare Deployment Guide](https://nuxt.com/deploy/cloudflare)

---

**Note**: This deployment guide is specifically tailored for the wedding invitation project structure. Adjust paths and configurations as needed for your specific setup.