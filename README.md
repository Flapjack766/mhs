# Sammakieh Timbers Website

A modern, bilingual (English & Arabic) timber supply company website built with Next.js 14 and deployed on Cloudflare Pages.

## 🚀 Deployment on Cloudflare Pages

### Prerequisites
- Cloudflare account
- Git repository (GitHub, GitLab, or Bitbucket)

### Step-by-Step Deployment

#### 1. Push to Git Repository
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

#### 2. Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click on "Workers & Pages" in the sidebar
3. Click "Create application" > "Pages" > "Connect to Git"
4. Select your repository
5. Configure build settings:

**Build Configuration:**
- **Framework preset:** Next.js
- **Build command:** `npm run build`
- **Build output directory:** `.next`
- **Root directory:** `/` (leave empty)
- **Node version:** `18`

#### 3. Environment Variables

Add these environment variables in Cloudflare Pages settings:

```env
RESEND_API_KEY=re_PafiSWwH_KTGR11adET5wxXFPQJQBGCLJ
NODE_VERSION=18
```

#### 4. Deploy

Click "Save and Deploy" - Cloudflare will automatically build and deploy your site.

### 🎯 Performance Optimizations

This site is optimized for Cloudflare with:

✅ **Image Optimization:**
- AVIF & WebP formats
- Responsive image sizes
- Lazy loading

✅ **Build Optimizations:**
- SWC minification
- Standalone output
- Gzip compression
- Static page generation

✅ **Cloudflare CDN:**
- Global edge network
- Automatic HTTPS
- DDoS protection
- Smart routing

### 📊 Expected Performance

- **First Contentful Paint (FCP):** < 1.0s
- **Largest Contentful Paint (LCP):** < 1.5s
- **Time to Interactive (TTI):** < 2.0s
- **Lighthouse Score:** 95+

## 🌐 Features

- ✅ Bilingual support (English & Arabic)
- ✅ Contact form with Resend email service
- ✅ Automatic welcome emails to customers
- ✅ Ticket number system
- ✅ WhatsApp integration
- ✅ Image slider on homepage
- ✅ Responsive design
- ✅ RTL support for Arabic

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **i18n:** next-intl
- **Email:** Resend
- **Deployment:** Cloudflare Pages

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   └── [locale]/          # Localized pages
├── components/            # React components
├── messages/              # Translation files
│   ├── en.json           # English
│   └── ar.json           # Arabic
├── public/               # Static assets
│   ├── images/           # Images
│   └── logos/            # Logos & icons
└── i18n/                 # i18n configuration
```

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Translation Keys

Translation files use sequential keys (A1, A2, A3...) for easy management.

### Key Ranges:
- A1-A20: Core content
- A21-A40: Products & services
- A41-A60: CTA sections
- A61-A80: Team & people
- A81-A100: Features & stats
- A101-A130: Forms & UI elements

## 📧 Email Configuration

The contact form sends two emails:

1. **To Admin (info@mhstimber.com):**
   - Customer details
   - Message content
   - WhatsApp quick link

2. **To Customer:**
   - Welcome message
   - Ticket number
   - Contact information
   - Business hours

## 🎨 Brand Colors

- Primary (Timber): `#8B4513`
- Background: `#f5f5f5`
- Text: `#333`
- Links: `#0066cc`
- WhatsApp: `#25D366`

## 📱 Contact Information

- **Email:** info@mhstimber.com
- **Phone:** +966 55 776 0117
- **Address:** 31 Al Islam Street, Al Hamra
- **WhatsApp:** +966 55 776 0117

## 🔐 Security

- Environment variables stored securely in Cloudflare
- API routes protected
- Email validation
- XSS protection
- CORS headers

## 📈 Analytics (Optional)

To add analytics, configure in Cloudflare Pages:
1. Web Analytics (built-in)
2. Google Analytics
3. Custom analytics

## 🆘 Support

For issues or questions:
- Check Cloudflare build logs
- Review Next.js documentation
- Contact: info@mhstimber.com

---

© 2025 سماقيه للأخشاب | Sammakieh Timbers. All rights reserved.