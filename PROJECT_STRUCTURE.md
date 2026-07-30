# Merinaz Aesthetic Clinic Website

## Project Overview
This is an Angular 12 application for Merinaz Aesthetic Clinic, designed with a premium and elegant aesthetic matching the LUMINA reference design.

## Color Theme
- **Background**: #F4EDE1 (Soft Beige)
- **CTA/Primary**: #95785A (Warm Brown)
- **Text**: #95785A (Warm Brown)
- **Sub Text**: #000000 (Black)
- **Dark Background**: #3d2e24 (Dark Brown)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/              # Navigation header with logo and menu
│   │   ├── hero/                # Main hero section with CTA
│   │   ├── features/            # 4 feature cards section
│   │   ├── services/            # Popular procedures/services grid
│   │   ├── about/               # About clinic section with stats
│   │   ├── process/             # 4-step comprehensive approach
│   │   ├── discount-banner/     # 10% discount promotional banner
│   │   └── footer/              # Footer with contact form and links
│   ├── services/
│   │   ├── data.service.ts      # Service to load merinaz.json data
│   │   └── api.service.ts       # API service for form submissions
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   └── app.module.ts
├── assets/
│   └── data/
│       └── merinaz.json         # All data content, images, and config
└── styles.scss                   # Global styles with color theme

```

## Components

### 1. Header Component
- Sticky navigation bar
- Logo with brand name
- Navigation menu (responsive)
- Phone number
- CTA button
- Mobile hamburger menu

### 2. Hero Component
- Large hero section with main headline
- Subtitle text
- Two CTA buttons (primary and secondary)
- Hero image on the right

### 3. Features Component
- 4 feature cards in a grid
- Icons with descriptions
- Highlights clinic benefits

### 4. Services Component
- Grid of popular procedures
- Service cards with images
- Discount badges
- Pricing information
- "View All" link

### 5. About Component
- Clinic information
- Statistics (years, clients, doctors)
- Feature list with checkmarks
- Clinic interior image

### 6. Process Component
- 4-step comprehensive approach
- Numbered process steps
- Connected with dotted lines
- Consultation → Planning → Procedures → Results

### 7. Discount Banner Component
- Promotional section
- 10% discount offer
- CTA button
- Background image overlay

### 8. Footer Component
- Multi-column layout
- Service links
- Clinic information
- Contact details
- Newsletter subscription form
- Social media links
- Copyright information

## Services

### Data Service
- Loads content from `merinaz.json`
- Provides data to components
- Observable-based data fetching

### API Service
- Form submission methods
- Newsletter subscription
- Contact form handling
- Configurable API endpoints

## Features

1. **Responsive Design**: Mobile-first approach, works on all devices
2. **Smooth Scrolling**: Navigation scrolls smoothly to sections
3. **Form Integration**: Newsletter and contact forms ready for API integration
4. **Data-Driven**: All content loaded from JSON file
5. **Modern Animations**: Hover effects and transitions
6. **SEO-Ready**: Semantic HTML structure
7. **Accessibility**: ARIA labels and keyboard navigation

## API Integration

The `ApiService` includes methods for:
- `submitForm(formData)`: General form submission
- `submitContactForm(contactData)`: Contact form submission
- `submitNewsletterForm(email)`: Newsletter subscription

**To configure API endpoints:**
Edit `src/app/services/api.service.ts` and update the `apiUrl` variable with your actual API endpoint.

```typescript
private apiUrl = 'https://your-api-endpoint.com/api';
```

## Data Configuration

All content, images, and configuration are stored in:
`src/assets/data/merinaz.json`

### JSON Structure:
- `logo`: Logo URL
- `brandName`: Clinic name
- `address`: Physical address
- `contact`: Phone number
- `email`: Email address
- `social`: Social media links (Instagram, Facebook, TikTok, etc.)
- `slider`: Hero slider images
- `gallery`: Image gallery
- `testimonials`: Customer reviews

## Installation

```bash
npm install
```

## Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`

## Build

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

## Fonts Used

- **Playfair Display**: Headings and titles
- **Raleway**: Body text and UI elements

Both fonts are loaded from Google Fonts.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

1. Add booking/appointment system
2. Integrate payment gateway
3. Add doctor profiles section
4. Create blog/articles section
5. Add before/after gallery
6. Implement reviews/testimonials carousel
7. Add live chat support
8. Multi-language support

## Notes

- Replace dummy images with actual clinic photos
- Update API endpoints in `api.service.ts`
- Customize `merinaz.json` with actual clinic data
- Add Google Analytics tracking
- Configure SEO meta tags
- Add sitemap.xml for better SEO

## License

© 2024 Merinaz Aesthetic Clinic. All rights reserved.
