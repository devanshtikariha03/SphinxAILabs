# Sphinx AI Labs Website

Modern, dark-themed website for Sphinx AI Labs - AI Calling Solutions with Intelligent Insights.

## Deployment on Render

### Option 1: Static Site (Recommended - Free)

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push all your files (index.html, styles.css, script.js, package.json, render.yaml)

2. **Connect to Render**
   - Go to [render.com](https://render.com) and sign up/login
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Render will auto-detect the `render.yaml` configuration
   - Click "Create Static Site"

3. **That's it!** Your site will be live at `https://your-site-name.onrender.com`

### Option 2: Web Service (Alternative)

If you prefer to use a web service instead:

1. **Push to GitHub** (same as above)

2. **Connect to Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Settings:
     - **Build Command**: Leave empty
     - **Start Command**: `npx serve -s . -l $PORT`
     - **Environment**: Node
   - Click "Create Web Service"

### Custom Domain (Optional)

1. In your Render dashboard, go to your service
2. Click "Settings" → "Custom Domain"
3. Add your domain and follow the DNS configuration instructions

## Local Development

To run locally:

```bash
# Install dependencies (if needed)
npm install

# Start local server
npm start
```

Or simply open `index.html` in your browser.

## Files Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # Styles and animations
├── script.js       # JavaScript functionality
├── package.json    # Node.js configuration
├── render.yaml     # Render deployment config
└── README.md       # This file
```

## Features

- Dark, modern design with gradient accents
- Responsive layout for all devices
- India/Australia pricing toggle
- Smooth animations and transitions
- AI calling packages showcase
- Director profiles
- Contact form

---

© 2024 Sphinx AI Labs. All rights reserved.
