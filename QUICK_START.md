# Quick Start Guide - Merinaz Website

## 🚀 Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)
- Angular CLI (v12)

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   
   The application will be available at: `http://localhost:4200/`

3. **Build for Production**
   ```bash
   npm run build
   ```
   
   Production files will be in the `dist/` folder.

## 📝 Configuration Steps

### 1. Update API Endpoints

Edit `src/app/services/api.service.ts`:

```typescript
private apiUrl = 'https://your-api-endpoint.com/api';
```

Replace with your actual API endpoint.

### 2. Update Content

Edit `src/assets/data/merinaz.json`:

```json
{
  "logo": "your-logo-url",
  "brandName": "Your Clinic Name",
  "address": "Your Address",
  "contact": "Your Phone",
  "email": "your@email.com",
  "social": {
    "insta": "your-instagram-url",
    "fb": "your-facebook-url",
    "tikTok": "your-tiktok-url"
  }
}
```

### 3. Replace Images

Update the following with your actual images:
- Logo in `merinaz.json`
- Hero section images
- Service card images
- About section image
- Discount banner image

You can either:
- Update URLs in the JSON file
- Or replace hardcoded URLs in component files

## 🎨 Customization

### Colors

All colors are defined in `src/styles.scss`:

```scss
:root {
  --bg-color: #F4EDE1;
  --cta-color: #95785A;
  --text-color: #95785A;
  --sub-text-color: #000;
  --white: #fff;
  --dark: #3d2e24;
}
```

### Fonts

Fonts are imported from Google Fonts in `src/styles.scss`:
- **Playfair Display**: Headings
- **Raleway**: Body text

To change fonts, update the `@import` line.

## 📱 Testing

### Desktop
- Open `http://localhost:4200/` in your browser
- Test all sections and navigation
- Check form submissions

### Mobile
- Use browser DevTools (F12)
- Toggle device toolbar
- Test on various screen sizes
- Check hamburger menu

### Forms
1. Newsletter subscription (footer)
2. Navigation smooth scroll
3. Mobile menu toggle

## 🔧 Common Issues

### Issue: Port 4200 already in use
**Solution:**
```bash
ng serve --port 4201
```

### Issue: Node version error
**Solution:**
The project uses `NODE_OPTIONS=--openssl-legacy-provider` in package.json scripts. This is already configured.

### Issue: Module not found
**Solution:**
```bash
npm install
```

### Issue: Compilation errors
**Solution:**
- Check that all files are in the correct locations
- Verify `app.module.ts` imports all components
- Run `npm install` again

## 📂 Project Structure

```
src/
├── app/
│   ├── components/      # All UI components
│   │   ├── header/
│   │   ├── hero/
│   │   ├── features/
│   │   ├── services/
│   │   ├── about/
│   │   ├── process/
│   │   ├── discount-banner/
│   │   └── footer/
│   ├── services/        # Data and API services
│   │   ├── data.service.ts
│   │   └── api.service.ts
│   └── app.module.ts    # Main module
├── assets/
│   └── data/
│       └── merinaz.json # All content data
└── styles.scss          # Global styles
```

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Form validation
- ✅ API-ready services
- ✅ Mobile menu
- ✅ Hover animations
- ✅ Newsletter subscription
- ✅ Social media links

## 📄 Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run watch      # Build and watch for changes
npm test           # Run unit tests
```

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Server
1. Upload files from `dist/merinaz-newsite/` to your server
2. Configure your web server (Apache/Nginx)
3. Set up SSL certificate
4. Configure domain DNS

### Nginx Configuration Example
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist/merinaz-newsite;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 📊 Performance Tips

1. **Optimize Images**
   - Compress images before upload
   - Use WebP format where possible
   - Use appropriate image sizes

2. **Enable Caching**
   - Configure browser caching
   - Use CDN for assets

3. **Minify Assets**
   - Production build already minifies
   - Consider further optimization

## 🔒 Security Checklist

- [ ] Update API endpoints
- [ ] Enable HTTPS
- [ ] Configure CORS
- [ ] Validate all form inputs
- [ ] Sanitize user data
- [ ] Add rate limiting on API
- [ ] Set security headers

## 📞 Support

For issues or questions:
1. Check `PROJECT_STRUCTURE.md` for detailed documentation
2. Review `IMPLEMENTATION_SUMMARY.md` for technical details
3. Check Angular 12 documentation: https://v12.angular.io/docs

## ✅ Launch Checklist

Before going live:
- [ ] Update all content in `merinaz.json`
- [ ] Replace all dummy images
- [ ] Configure API endpoints
- [ ] Test all forms
- [ ] Test on multiple devices
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Add Google Analytics
- [ ] Set up SEO meta tags
- [ ] Configure sitemap
- [ ] Enable SSL
- [ ] Test page load speed
- [ ] Verify social media links
- [ ] Test newsletter subscription

---

**Need Help?** Check the other documentation files:
- `PROJECT_STRUCTURE.md` - Complete project overview
- `IMPLEMENTATION_SUMMARY.md` - Technical implementation details
- `README.md` - Original project README
