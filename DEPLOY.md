# Deploy to Vercel

1. Install Vercel CLI (if not installed):

```powershell
npm install -g vercel
```

2. Login (interactive) or use token:

Interactive:
```powershell
vercel login
```

With token:
```powershell
vercel login --token YOUR_TOKEN_HERE
```

3. From repository root run:

```powershell
npm install
npm run build
vercel --prod
# or: vercel --prod --confirm --token YOUR_TOKEN_HERE
```

4. To link or add a domain to the `yes-studio` project:

```powershell
vercel domains add yourdomain.com --project yes-studio
# follow DNS instructions from Vercel (set A or CNAME as requested)
```

Notes:
- `vercel.json` in the repo configures Vercel to run `npm run build` and serve the `dist` folder as a static SPA.
- If you prefer the Vercel web dashboard, create a new project and import this repo; set the build command to `npm run build` and output directory to `dist`.
