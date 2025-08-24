# 🚀 Deployment Guide - Ryan's House Sitting Website

This guide will walk you through deploying your house sitting website to GitHub and then automatically to DigitalOcean App Platform.

## 📋 Prerequisites

- GitHub account
- DigitalOcean account
- Node.js 18+ installed locally
- Git installed locally

## 🔧 Step 1: Prepare Your GitHub Repository

### 1.1 Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `house-sitter-website`
5. Make it **Public** (DigitalOcean needs access)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 1.2 Update Remote Origin

```bash
cd C:\house-sitter-website
git remote set-url origin https://github.com/YOUR_USERNAME/house-sitter-website.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 🔑 Step 2: Configure DigitalOcean App Platform

### 2.1 Create DigitalOcean Access Token

1. Go to [DigitalOcean](https://cloud.digitalocean.com)
2. Navigate to **API** → **Tokens/Keys**
3. Click **Generate New Token**
4. Name it: `house-sitter-deploy`
5. Set expiration to **No Expiration**
6. Copy the token (you'll need it for GitHub)

### 2.2 Update App Configuration

Edit `.do/app.yaml` and replace:
- `your-username` with your actual GitHub username
- Adjust `instance_size_slug` if needed:
  - `basic-xxs` (cheapest, good for starting)
  - `basic-xs` (more resources)
  - `basic-s` (even more resources)

## 🚀 Step 3: Deploy to GitHub

### 3.1 Commit and Push Your Code

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Professional house sitting website"

# Push to GitHub
git push -u origin main
```

### 3.2 Set Up GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `DIGITALOCEAN_ACCESS_TOKEN`
5. Value: Paste your DigitalOcean token from Step 2.1

## 🌐 Step 4: Deploy to DigitalOcean

### 4.1 Create App in DigitalOcean

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click **Create App**
3. Choose **GitHub** as source
4. Select your `house-sitter-website` repository
5. Choose the `main` branch
6. DigitalOcean will auto-detect it's a Next.js app

### 4.2 Configure App Settings

- **App Name**: `ryans-house-sitting`
- **Region**: Choose closest to your target audience (e.g., London for Europe)
- **Plan**: Basic ($5/month to start)
- **Instance Size**: Basic XXS (1 vCPU, 512MB RAM)

### 4.3 Environment Variables

Add these environment variables:
- `NODE_ENV`: `production`
- `NEXT_PUBLIC_BUSINESS_NAME`: `Ryan's House Sitting`
- `NEXT_PUBLIC_BUSINESS_DESCRIPTION`: `Professional house sitting services across Europe and worldwide`

## ✅ Step 5: Verify Deployment

1. Wait for DigitalOcean to build and deploy (usually 2-5 minutes)
2. Your app will get a URL like: `https://ryans-house-sitting-abc123.ondigitalocean.app`
3. Test the website functionality
4. Check that the contact form works

## 🔄 Step 6: Continuous Deployment

Now every time you push to the `main` branch on GitHub:
1. GitHub Actions will automatically test your code
2. If tests pass, it will deploy to DigitalOcean
3. Your website will be updated automatically

## 🎯 Step 7: Custom Domain (Optional)

### 7.1 Add Custom Domain in DigitalOcean

1. In your app settings, go to **Settings** → **Domains**
2. Add your domain (e.g., `ryanshousesitting.com`)
3. Update your domain's DNS to point to DigitalOcean

### 7.2 SSL Certificate

DigitalOcean automatically provides free SSL certificates for your domain.

## 📊 Step 8: Monitor and Optimize

### 8.1 Performance Monitoring

- Check DigitalOcean app metrics
- Monitor page load times
- Track user engagement

### 8.2 Google Ads Integration

1. Add Google Analytics tracking code
2. Set up conversion tracking for contact form
3. Create landing pages for specific ad campaigns

## 🛠️ Troubleshooting

### Common Issues

**Build Fails:**
- Check GitHub Actions logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**App Won't Start:**
- Check DigitalOcean app logs
- Verify environment variables
- Ensure port 3000 is configured correctly

**Contact Form Issues:**
- Test locally first
- Check browser console for errors
- Verify form submission handling

## 💰 Cost Optimization

- **Basic XXS Plan**: $5/month (good for starting)
- **Basic XS Plan**: $12/month (more resources)
- **Basic S Plan**: $24/month (even more resources)

Start with XXS and scale up as needed.

## 🔒 Security Best Practices

- Keep DigitalOcean token secure
- Regularly update dependencies
- Monitor for security vulnerabilities
- Use HTTPS (automatic with DigitalOcean)

## 📞 Support

- **GitHub Issues**: For code-related problems
- **DigitalOcean Support**: For deployment issues
- **Documentation**: Check Next.js and DigitalOcean docs

---

## 🎉 Congratulations!

Your house sitting website is now:
- ✅ Professionally designed
- ✅ SEO optimized for Google Ads
- ✅ Automatically deployed from GitHub
- ✅ Running on DigitalOcean's reliable infrastructure
- ✅ Ready to attract European clients!

**Next Steps:**
1. Customize content with your personal information
2. Add your own photos and testimonials
3. Set up Google Ads campaigns
4. Start marketing your services!

---

*Built with ❤️ for Ryan's House Sitting Business*
