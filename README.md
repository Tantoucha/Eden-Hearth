# Eden & Hearth - Professional Landscaping & Kitchen Installers

![Eden & Hearth Logo](public/simple-logo.svg)

A modern, responsive website for **Eden & Hearth Landscaping and Kitchen Installers** - serving Greater Manchester and the North West with professional outdoor and indoor transformation services.

## 🌟 Features

### 🎨 Design & User Experience
- **Modern, Professional Design** with clean aesthetics
- **Fully Responsive** - works perfectly on all devices
- **Smooth Animations** and interactive elements
- **Professional Color Scheme** - Deep blues and emerald greens
- **Optimized Performance** with fast loading times

### 🔧 Technical Stack
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Modern CSS** - Custom properties, Grid, Flexbox
- **Font Awesome Icons** - Professional iconography
- **Google Fonts** - Inter & Playfair Display typography

### 📱 Website Sections
1. **Hero Section** - Compelling introduction with call-to-action
2. **Services** - Landscaping, Kitchen Installation, Maintenance
3. **Portfolio** - Filterable project gallery
4. **About & Founders** - Company story and team profiles
5. **Contact** - Professional contact form and information
6. **Footer** - Complete site navigation and social links

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd eden-hearth-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🏢 About Eden & Hearth

Eden & Hearth Landscaping and Kitchen Installers brings together passion, expertise, and innovation to transform homes across Greater Manchester and the North West. Founded by three visionary professionals, we combine years of experience in landscape design and kitchen installation.

### 👥 Our Founders
- **Abdul Tantouch** - Co-Founder & Operations Director
- **Ibrahim Berkawi** - Co-Founder & Kitchen Installations Director  
- **Hamdi Hassan** - Co-Founder & Landscape Director

### 🛠️ Our Services
- **Professional Landscaping** - Garden design, plant installation, hardscaping
- **Kitchen Installations** - Custom design, cabinet installation, appliance integration
- **Maintenance Services** - Ongoing care for gardens and kitchen installations
- **Certified Installation Teams** - Skilled professionals for quality assurance

## 📞 Contact Information

- **Service Area**: Greater Manchester & North West
- **Email**: info@edenhearth.co.uk
- **Phone**: +44 7XXX XXX XXX

## 🌐 Deployment

This website is optimized for deployment on:
- **Netlify** - Automatic deployments from Git
- **Vercel** - Zero-config deployments
- **GitHub Pages** - Free hosting with custom domain support
- **Traditional Web Hosting** - Upload `dist` folder contents

### Environment Configuration
The website is configured for production deployment with:
- Optimized asset bundling
- Minified CSS and JavaScript
- Compressed images and fonts
- SEO-friendly meta tags
- Performance optimization

## 📄 License

© 2025 Eden & Hearth Landscaping and Kitchen Installers. All rights reserved.

---

## 🚀 Vercel Go-Live Checklist

### 1. Vercel Domain Configuration
1. Go to **Vercel → Project → Settings → Domains**
2. Add domains:
   - `eden-hearth.co.uk` (Primary)
   - `www.eden-hearth.co.uk` (Redirect to primary)
3. Use the DNS values Vercel shows:
   - If prompted: A record @ → 216.198.79.1
   - CNAME record www → cname.vercel-dns.com

### 2. IONOS DNS Setup
1. Go to **IONOS → Domains & SSL → DNS**
2. Update DNS records:
   - Set A @ → 216.198.79.1
   - Set CNAME www → cname.vercel-dns.com
   - Remove old records (GitHub Pages A/AAAA/CNAME)

### 3. Vercel Environment Variables
1. Go to **Vercel → Settings → Environment Variables → Production**
2. Add the following variables:
   - `NEXT_PUBLIC_SITE_URL=https://eden-hearth.co.uk`
   - `CONTACT_TO=help@eden-hearth.co.uk`
   - `RESEND_API_KEY=...` (optional)
   - `DATABASE_URL=...` (optional)
3. **Redeploy Production** after adding variables

### 4. Verification Steps
1. Visit `/status` on production to confirm commit + build time
2. Visit `/api/health` (should return `ok:true`)
3. Test the contact form (should email CONTACT_TO if RESEND_API_KEY set)
4. Verify that www redirects to apex domain

---

**Built with ❤️ for transforming spaces across Greater Manchester and the North West**
