# Routing Structure - Updated

## Pages Created

### 1. Home Page (`/home` or `/`)
**Route**: `/` or `/home`
**Component**: `HomeComponent`
**Location**: `src/app/pages/home/`

**Includes**:
- Hero Section (Main banner with CTA)
- Features Section (4 benefit cards)
- Services Section (Popular procedures)
- Process Section (4-step approach)
- Discount Banner (10% offer)

### 2. About Us Page (`/about`)
**Route**: `/about`
**Component**: `AboutPageComponent`
**Location**: `src/app/pages/about/`

**Includes**:
- About Hero (Page header)
- Our Story (Clinic history and mission)
- Our Values (6 value cards)
- Statistics (Years, clients, doctors)
- Our Team (3 doctor profiles)
- Clinic Gallery (4 images)
- CTA Section (Book consultation)

## Global Components

These appear on ALL pages:

### Header (`app-header`)
- Sticky navigation
- Logo with brand name
- Navigation menu: Home | Services | About Us | Prices | Contact
- Phone number
- "Book Now" button
- Mobile menu

### Footer (`app-footer`)
- Multi-column layout
- Service links
- Clinic links
- Contact information
- Newsletter form
- Social media icons
- Copyright

## Navigation Structure

```
Header (Always visible)
  ├── Logo (links to /home)
  ├── Home → /home
  ├── Services → /home#services
  ├── About Us → /about
  ├── Prices → /home#prices
  └── Contact → /home#contact

Pages
  ├── Home Page (/)
  │   ├── Hero
  │   ├── Features
  │   ├── Services (#services)
  │   ├── Process
  │   └── Discount Banner
  │
  └── About Us (/about)
      ├── About Hero
      ├── Our Story
      ├── Our Values
      ├── Statistics
      ├── Our Team
      ├── Clinic Gallery
      └── CTA

Footer (Always visible)
```

## Routing Configuration

### app-routing.module.ts
```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', redirectTo: '' }
];
```

### Router Features Enabled:
- `scrollPositionRestoration: 'top'` - Scroll to top on route change
- `anchorScrolling: 'enabled'` - Enable fragment/anchor scrolling

## app.component.html Structure

```html
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
```

This ensures header and footer are always visible, with page content changing in the router-outlet.

## Language

All content is in **English** as requested:
- Home, Services, About Us, Prices, Contact
- Book Now, Book Consultation, Virtual Tour
- All section titles and descriptions in English

## SCSS Style

All components use **Nested SCSS** syntax:
```scss
.component {
  property: value;
  
  .child {
    property: value;
    
    &:hover {
      property: value;
    }
    
    @media (max-width: 768px) {
      property: value;
    }
  }
}
```

## Color Theme (Applied Consistently)

```scss
Background:  #F4EDE1
CTA/Primary: #95785A
Text:        #95785A
Sub Text:    #000000
Dark BG:     #3d2e24
White:       #FFFFFF
```

## How to Add More Pages

1. Create page component:
```bash
ng generate component pages/your-page
```

2. Add route in `app-routing.module.ts`:
```typescript
{ path: 'your-page', component: YourPageComponent }
```

3. Add navigation link in header:
```html
<a routerLink="/your-page" class="nav-link">Your Page</a>
```

## Active Link Styling

Navigation links automatically get `.active` class when on that route:
```scss
.nav-link {
  &.active {
    color: #000;
    font-weight: 600;
    
    &::after {
      content: '';
      height: 2px;
      background-color: #95785A;
    }
  }
}
```

---

**Current Routes Available**:
- `/` or `/home` - Home Page
- `/about` - About Us Page

**Coming Soon** (can be added):
- `/services` - Services Page
- `/contact` - Contact Page
- `/prices` - Pricing Page
- `/gallery` - Photo Gallery
- `/blog` - Blog/Articles
