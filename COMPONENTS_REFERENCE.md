# Components Reference Guide

## Overview
This document provides a detailed reference for all components in the Merinaz website, matching the LUMINA reference design.

---

## 🎨 Color Palette

```
Background:  #F4EDE1  (Soft Beige)
CTA/Primary: #95785A  (Warm Brown)
Text:        #95785A  (Warm Brown)
Sub Text:    #000000  (Black)
Dark BG:     #3d2e24  (Dark Brown)
White:       #FFFFFF  (White)
```

---

## 📦 Component Breakdown

### 1. Header Component (`app-header`)

**Location**: `src/app/components/header/`

**Purpose**: Main navigation bar with logo, menu, and CTA

**Structure**:
```html
<header class="header">
  - Logo + Brand Name
  - Navigation Menu (6 items)
  - Phone Number
  - "Записаться" Button
  - Mobile Hamburger Menu
</header>
```

**Features**:
- Sticky header (stays on top when scrolling)
- Smooth scroll to sections
- Responsive mobile menu
- Active state highlighting

**Navigation Items**:
1. Услуги (Services)
2. Врачи (Doctors)
3. О клинике (About Clinic)
4. Цены (Prices)
5. Акции (Promotions)
6. Контакты (Contacts)

**Responsive Behavior**:
- Desktop: Full horizontal menu
- Tablet: Condensed menu
- Mobile: Hamburger menu with slide-out panel

---

### 2. Hero Component (`app-hero`)

**Location**: `src/app/components/hero/`

**Purpose**: Main landing section with headline and CTA

**Structure**:
```html
<section class="hero">
  <div class="hero-content">
    <div class="hero-text">
      - H1: "ЭСТЕТИКА ВАШЕЙ ЛУЧШЕЙ ВЕРСИИ"
      - Subtitle: Clinic description
      - Primary CTA: "Записаться на консультацию"
      - Secondary CTA: "Тур по клинике"
    </div>
    <div class="hero-image">
      - Large hero image
    </div>
  </div>
</section>
```

**Features**:
- Large, bold typography
- Two-column layout
- Call-to-action buttons with icons
- High-quality hero image
- Smooth animations

**Text Content**:
- **Title**: "ЭСТЕТИКА ВАШЕЙ ЛУЧШЕЙ ВЕРСИИ"
- **Subtitle**: "Современная косметология для естественной красоты и уверенности"

**Buttons**:
- **Primary**: Scrolls to contact form
- **Secondary**: Scrolls to services section

---

### 3. Features Component (`app-features`)

**Location**: `src/app/components/features/`

**Purpose**: Highlight 4 key benefits/features

**Structure**:
```html
<section class="features">
  <div class="features-grid">
    [4 Feature Cards]
    - Icon (SVG)
    - Title
    - Description
  </div>
</section>
```

**Features List**:
1. **Высококачественное оборудование**
   - Icon: Medical equipment
   - Text: "Стойкое качество с медицинским оборудованием"

2. **Безопасность и качество**
   - Icon: Shield with checkmark
   - Text: "Качество, проверенное в оборудовании"

3. **Индивидуальный подход**
   - Icon: User profile
   - Text: "Персональные программы под ваши цели"

4. **Комфорт и прозрачность**
   - Icon: Star
   - Text: "Прозрачные ценник и работы в вас"

**Grid Layout**:
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column

---

### 4. Services Component (`app-services`)

**Location**: `src/app/components/services/`

**Purpose**: Display popular procedures/services

**Structure**:
```html
<section class="services" id="services">
  <div class="section-header">
    - Title: "Популярные процедуры"
    - "Все услуги" link
  </div>
  <div class="services-grid">
    [4 Service Cards]
    - Image
    - Discount badge (optional)
    - Title
    - Description
    - Price
    - Arrow button
  </div>
</section>
```

**Services Display**:

1. **Аппаратная косметология**
   - Discount: -20%
   - Price: от 4 600 ₽
   - Description: "Эффективные методики с использованием современного оборудования"

2. **Инъекционная косметология**
   - Discount: -15%
   - Price: от 6 000 ₽
   - Description: "Ботокс, филлеры, биоревитализация мезотерапия и пластика"

3. **Уходовые процедуры**
   - Price: от 3 500 ₽
   - Description: "Профессиональный уход для здоровья и сияния кожи"

4. **Уход за телом**
   - Price: от 5 600 ₽
   - Description: "Коррекция фигуры, лифтинг обертывания для тела"

**Interactions**:
- Hover: Card lifts up with shadow
- Hover: Image zooms in slightly
- Click: Navigate to service detail (can be configured)

---

### 5. About Component (`app-about`)

**Location**: `src/app/components/about/`

**Purpose**: Clinic information with statistics

**Structure**:
```html
<section class="about" id="about">
  <div class="about-content">
    <div class="about-image">
      - Clinic interior photo
    </div>
    <div class="about-text">
      - Title: "О КЛИНИКЕ"
      - Description paragraph
      - Feature list (with checkmarks)
      - Statistics (3 stats)
    </div>
  </div>
</section>
```

**Statistics**:
1. **7+** - лет успешной работы
2. **15 000+** - довольных клиентов
3. **20+** - квалифицированных врачей

**Features List**:
- ✓ Современное оборудование
- ✓ Авторские методики
- ✓ Высокие стандарты сервиса

**Layout**:
- Desktop: Side-by-side (image left, text right)
- Mobile: Stacked (image top, text bottom)

---

### 6. Process Component (`app-process`)

**Location**: `src/app/components/process/`

**Purpose**: Show 4-step comprehensive approach

**Structure**:
```html
<section class="process">
  <h2>"Комплексный подход к вашей красоте"</h2>
  <div class="process-grid">
    [4 Process Steps]
    - Number circle
    - Title
    - Description
    - Connecting line (between steps)
  </div>
</section>
```

**Process Steps**:

**Step 1: Консультация**
- Number: 01
- Description: "Индивидуальный план процедуры и обследования"

**Step 2: Планирование**
- Number: 02
- Description: "Подбор решительных программ к цели и пациента"

**Step 3: Процедуры**
- Number: 03
- Description: "Проведение процедуры с конт и результата"

**Step 4: Результат**
- Number: 04
- Description: "Индивидуально и поддержка ваша красота"

**Visual Elements**:
- Numbered circles with beige background
- Dotted lines connecting steps (desktop only)
- Responsive: Lines disappear on mobile

---

### 7. Discount Banner Component (`app-discount-banner`)

**Location**: `src/app/components/discount-banner/`

**Purpose**: Promotional section with discount offer

**Structure**:
```html
<section class="discount-banner">
  <div class="banner-content">
    <div class="banner-text">
      - Title: "Дарим 10% на первую процедуру"
      - Description
      - CTA button
    </div>
    <div class="banner-image">
      - Promotional image
    </div>
  </div>
</section>
```

**Features**:
- Gradient background (dark brown)
- Background image overlay
- White text for contrast
- Large CTA button
- Full-width banner

**Text Content**:
- **Title**: "Дарим 10% на первую процедуру"
- **Description**: "Заботьтесь о вашей красоте уже сегодня. Заполняется в получите персональное предложение."
- **CTA**: "Записаться со скидкой"

---

### 8. Footer Component (`app-footer`)

**Location**: `src/app/components/footer/`

**Purpose**: Site footer with links, contact, and newsletter

**Structure**:
```html
<footer class="footer" id="contact">
  <div class="footer-main">
    [5 Columns]
    1. Logo + Description
    2. Services Links
    3. Clinic Links
    4. Contact Info
    5. Newsletter Form
  </div>
  <div class="footer-bottom">
    - Copyright
    - Social Media Links
  </div>
</footer>
```

**Column 1: Brand**
- Logo image
- Tagline: "Современная косметология для естественной красоты"

**Column 2: Услуги (Services)**
- Аппаратная косметология
- Инъекционная косметология
- Уход за телом
- Цены

**Column 3: Клиника (Clinic)**
- О клинике
- О команде
- Цены
- Акции

**Column 4: Контакты (Contacts)**
- 📍 Address with icon
- 📞 Phone with icon
- ✉️ Email with icon

**Column 5: Newsletter**
- Title: "Записаться на консультацию"
- Email input field
- Submit button
- Success/Error messages

**Footer Bottom**:
- Copyright: "© 2024 LUMINA. Все права защищены"
- Social icons: Instagram, Facebook, TikTok

**Features**:
- Dark background (#3d2e24)
- Newsletter form validation
- Smooth scroll links
- Social media integration
- Responsive layout (5 → 2 → 1 columns)

---

## 🎯 Component Interaction Flow

```
User arrives → Header (Navigation)
              ↓
            Hero (Welcome)
              ↓
          Features (Why Us)
              ↓
          Services (What We Offer)
              ↓
            About (Who We Are)
              ↓
          Process (How We Work)
              ↓
        Discount Banner (Special Offer)
              ↓
            Footer (Contact)
```

---

## 📱 Responsive Breakpoints

```scss
Desktop:  1025px and above
Tablet:   769px - 1024px
Mobile:   640px - 768px
Small:    below 640px
```

**Layout Changes**:
- **Desktop**: Full multi-column layouts
- **Tablet**: 2-column grids, condensed navigation
- **Mobile**: Single column, hamburger menu, stacked layouts

---

## 🔧 Component Usage

### Import in app.module.ts:
```typescript
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ProcessComponent } from './components/process/process.component';
import { DiscountBannerComponent } from './components/discount-banner/discount-banner.component';
import { FooterComponent } from './components/footer/footer.component';
```

### Use in app.component.html:
```html
<app-header></app-header>
<app-hero></app-hero>
<app-features></app-features>
<app-services></app-services>
<app-about></app-about>
<app-process></app-process>
<app-discount-banner></app-discount-banner>
<app-footer></app-footer>
```

---

## 🎨 Styling Conventions

Each component follows these patterns:

1. **Class Naming**: BEM-style (`.component-element--modifier`)
2. **Colors**: Use CSS variables from `styles.scss`
3. **Spacing**: Consistent padding/margin units
4. **Typography**: Playfair for headings, Raleway for body
5. **Transitions**: 0.3s ease for all animations
6. **Shadows**: Subtle shadows on hover
7. **Border Radius**: 15-30px for rounded elements

---

## 📊 Component Sizes

| Component | Desktop Height | Mobile Height |
|-----------|---------------|---------------|
| Header | 80px | 70px |
| Hero | 100vh - 80px | 600px |
| Features | ~400px | Auto |
| Services | ~800px | Auto |
| About | ~600px | Auto |
| Process | ~500px | Auto |
| Discount | ~600px | Auto |
| Footer | ~500px | Auto |

---

## ✨ Interactive Elements

### Buttons:
- Primary: `#95785A` background, white text
- Secondary: Transparent with `#95785A` border
- Hover: Lift effect + shadow

### Cards:
- Background: `#F4EDE1`
- Hover: Lift 8px + shadow
- Border radius: 15px

### Links:
- Color: `#95785A`
- Hover: Lighter shade
- Transition: 0.3s

### Forms:
- Input border: `#95785A` (30% opacity)
- Focus: Full opacity
- Validation: Green success / Red error

---

This reference guide provides a complete overview of all components in the Merinaz website. Use it to understand the structure, customize content, and maintain consistency across the application.
