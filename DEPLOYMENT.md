# GitHub Pages Deployment Guide

## Quick Setup for GitHub Pages

1. **Create a new repository** on GitHub named `portfolio` (or any name you prefer)

2. **Initialize git in your frontend folder**:
   ```bash
   cd frontend
   git init
   git init
   git commit -m "Initial commit: Tommyboy0797 portfolio"
   ```

3. **Add your GitHub repository as remote**:
   ```bash
   git remote add origin https://github.com/Tommyboy0797/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Install gh-pages for deployment**:
   ```bash
   npm install --save-dev gh-pages
   ```

5. **Update package.json** (add these lines):
   ```json
   {
     "homepage": "https://tommyboy0797.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

6. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

7. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click Save

Your portfolio will be live at: `https://tommyboy0797.github.io/portfolio`

## File Structure for GitHub Pages

```
portfolio/
├── src/
│   ├── components/
│   ├── data/
│   │   └── mock.js          # Update this with your real data
│   ├── App.js
│   └── App.css
├── public/
│   └── index.html
├── package.json
└── README.md
```

## Updating Content

To update your portfolio content:

1. Edit `src/data/mock.js`
2. Commit changes: `git add . && git commit -m "Update portfolio content"`
3. Push to GitHub: `git push origin main`
4. Deploy: `npm run deploy`

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public/` folder with your domain
2. Configure DNS with your domain provider
3. Update the homepage in package.json to your custom domain

## Tips for GitHub Pages

- Use relative paths for all assets
- Ensure all images are optimized
- Test the build locally: `npm run build && serve -s build`
- GitHub Pages may take a few minutes to update after deployment