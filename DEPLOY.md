# Deploy JORIM & CO. BESPOKE to the Cloud

This website is a static site (HTML/CSS/JS), so deployment is very easy.

## Option 1: Netlify Drop (fastest)
1. Open https://app.netlify.com/drop
2. Open your folder `D:\JORIM & CO. BESPOKE` in File Explorer.
3. Drag the whole folder and drop it on the Netlify page.
4. Netlify gives you a live link (for example `https://something.netlify.app`).
5. Share that link, and people can open it on their phones.

## Option 2: Cloudflare Pages
1. Go to https://dash.cloudflare.com and log in.
2. Open `Workers & Pages` and click `Create` then `Pages`.
3. Choose `Upload assets` (for static site without build setup).
4. Upload all files from your folder `D:\JORIM & CO. BESPOKE`.
5. Set the project name, then deploy.
6. Cloudflare gives you a public URL you can share to any phone.

### Add Your Custom Domain on Cloudflare
1. In your Pages project, open `Custom domains`.
2. Click `Set up a custom domain`.
3. Enter your domain, for example `jorimco.com` or `www.jorimco.com`.
4. If your domain is already managed on Cloudflare DNS, confirm and save.
5. If your domain is with another provider, copy the DNS record Cloudflare gives:
	- Usually `CNAME` for `www` to your Pages hostname.
	- Sometimes `A` or `CNAME flattening` for root domain.
6. Wait for DNS propagation (often a few minutes, sometimes up to 24 hours).
7. In Pages, make sure SSL status is active, then test on phone using both Wi-Fi and mobile data.

### Recommended Domain Setup
- Primary: `www.yourdomain.com`
- Redirect: `yourdomain.com` to `www.yourdomain.com`
- SSL/TLS mode: `Full` (or `Full (strict)` if certificate is valid)

## Option 3: GitHub Pages
1. Create a GitHub repository and upload all files from this folder.
2. In GitHub repo settings, open `Pages`.
3. Set source to `Deploy from a branch`, choose `main`, folder `/ (root)`.
4. Save and wait about 1 to 3 minutes.
5. Your site will be online at a GitHub Pages link.

## Local Preview Before Deploy
Run this in PowerShell:

```powershell
Set-Location "D:\JORIM & CO. BESPOKE"
py -m http.server 5500
```

Then open:
- `http://localhost:5500`

## Notes
- Keep photo file names exactly as they are referenced in HTML.
- If you change image names, update the `src` paths in the page files.
- You can replace or add photos in the `images` folder anytime.
- If `python` does not run on Windows, use `py` or disable Python App Execution Aliases in Windows Settings.
