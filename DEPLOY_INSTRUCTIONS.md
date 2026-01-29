# Quick Deploy to GitHub Pages 🚀

Since direct deployment from Emergent requires GitHub authentication, here's the easiest way to deploy:

---

## Option A: Deploy via GitHub UI (Easiest!) ⭐

### Step 1: Download the Build
Download the production build from Emergent (the `build` folder contents).

### Step 2: Create gh-pages Branch in GitHub
1. Go to https://github.com/nanzcandare/Splish-Splash-Party
2. Click the branch dropdown (shows "main")
3. Type `gh-pages` in the search box
4. Click **"Create branch: gh-pages from main"**

### Step 3: Upload Build Files
1. Switch to the `gh-pages` branch
2. Delete all existing files (select all → Delete)
3. Click **"Add file"** → **"Upload files"**
4. Upload ALL contents from the `build` folder:
   - `index.html`
   - `asset-manifest.json`
   - `static/` folder
   - `images/` folder
   - `audio/` folder
5. Commit the changes

### Step 4: Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **(root)**
4. Click **Save**

### Step 5: Access Your Site! 🎉
Your site will be live at:
```
https://nanzcandare.github.io/Splish-Splash-Party/
```

---

## Option B: Deploy via Command Line

If you have Git installed locally:

```bash
# Clone your repo
git clone https://github.com/nanzcandare/Splish-Splash-Party.git
cd Splish-Splash-Party

# Install dependencies
cd frontend  # or wherever package.json is
yarn install

# Deploy to gh-pages
yarn deploy
```

---

## Build Contents Ready ✅

The production build includes:
- `index.html` - Main HTML file
- `static/js/` - Compiled JavaScript
- `static/css/` - Compiled CSS
- `images/` - All 8 party photos
- `audio/summer-sound.mp3` - Background music

---

## Your Live URL Will Be:
# https://nanzcandare.github.io/Splish-Splash-Party/

🎈 Share this link with your guests once deployed!
