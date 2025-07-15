# Kad Jemputan Starter Kit

A beautiful, responsive digital wedding invitation built with Nuxt 3 and TailwindCSS. Features elegant typography, Islamic calendar integration, and modern web technologies for a memorable wedding experience.

> NOTE: Use this template to create your own wedding invitation repository. Click "Use this template" button to generate a new repository with the same structure and customize it for your wedding.

## Features

- **Responsive Design**: Mobile-first approach with elegant layouts
- **Calendar Integration**: Google Calendar, Outlook, and downloadable ICS files
- **Interactive Maps**: Google Maps and Waze integration for venue locations
- **RSVP Forms**: Embedded Google Forms for guest responses

## Limitation

- **Doesn't Support Multi-Languages**: Only Malay language for now
- **Static Configuration**: All wedding details must be configured in environment variables
- **No Admin Panel**: No backend interface for content management
- **Limited Theme Options**: Single design theme, customization requires code changes. Designed specifically for Islamic/Malay wedding ceremonies
- **Manual ICS Generation**: Calendar files must be created manually using external tools
- **No Image Upload**: All images must be manually placed in assets folder
- **Hardcoded Layout**: Card sections and layouts are not configurable through UI
- **No Guest Management**: RSVP responses handled externally through Google Forms

## Local Setup

### 1. Make sure to install the dependencies:

```bash
# npm
npm install
```

### 2. Setup environment file

There are a lot variable need to setup, can refer to [Environment Variables Setup Guide page](ENV_SETUP.md)

```bash
# npm
cp .env.example .env
```

### 3. Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Deployment

You can deploy to Cloudflare Page using `*.pages.dev` subdomain. Can refer to [deployment page](DEPLOYMENT.md).

## Project Structure

```
├── components/          # Vue components
├── layouts/            # Page layouts
├── pages/              # Application pages
├── assets/css/         # Stylesheets and fonts
├── public/ics/         # Calendar files
└── .env                # Environment configuration
```

## Technology Stack

- **Framework**: Nuxt 3.6.1
- **Styling**: TailwindCSS
- **Fonts**: Cormorant, Playfair Display, Great Vibes
- **Date Handling**: Moment.js
- **Deployment**: Cloudflare Pages
