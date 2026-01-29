# GitHub Pages Deployment Guide 🚀

Your project is now configured for GitHub Pages! Follow these steps:

---

## Step 1: Save to GitHub

1. In Emergent, look for the **"Save to GitHub"** button in the chat input area
2. Click it and follow the prompts to:
   - Connect your GitHub account (if not already)
   - Create a new repository or select existing one
   - Name it something like `birthday-pool-party` or `niamh-khalev-birthday`

---

## Step 2: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `gh-pages` → `/ (root)`
5. Click **Save**

---

## Step 3: Deploy the Site

After saving to GitHub, in your terminal (or Emergent):

```bash
cd /app/frontend
yarn deploy
```

This will:
1. Build the React app for production
2. Push the build to the `gh-pages` branch
3. GitHub will automatically deploy it

---

## Step 4: Access Your Live Site! 🎉

Your site will be available at:

```
https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/
```

Example: `https://johndoe.github.io/birthday-pool-party/`

---

## Important Notes

⚠️ **First deployment may take 1-5 minutes** to go live

⚠️ **Custom Domain (Optional):** You can add a custom domain in GitHub Pages settings

⚠️ **Updates:** Every time you make changes, run `yarn deploy` again to update the live site

---

## Configuration Already Done ✅

- [x] `homepage` set to "." in package.json (works with any repository name)
- [x] `gh-pages` package installed
- [x] Deploy scripts added (`predeploy` and `deploy`)

---

## Quick Commands Reference

| Command | Description |
|---------|-------------|
| `yarn build` | Create production build |
| `yarn deploy` | Build and deploy to GitHub Pages |

---

## Troubleshooting

**Page shows 404?**
- Make sure GitHub Pages is enabled in repository settings
- Check that the branch is set to `gh-pages`
- Wait a few minutes for deployment to complete

**Images/Audio not loading?**
- The homepage is set to "." which uses relative paths
- All assets should work correctly

---

Happy deploying! 🎈🏊‍♀️
