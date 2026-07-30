import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../../services/data.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-services-page',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ]),
    trigger('fadeSlide', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServicesPageComponent implements OnInit {

  data: any = {};
  servicesContact: any[] = [];
  brandName: string = '';
  selectedCategory: string = 'all';
  calendlyLinks: any[] = [];
  showLocationDropdown: { [key: string]: boolean } = {};

  // Pricing data structure
  servicePricing: any = {
    'Bikini': { standard: 60, pack: 58 },
    'Brazilian': { standard: 70, pack: 68 },
    'Full Butt': { standard: 65, pack: 60 },
    'Butt Cheeks': { standard: 30, pack: 28 },
    'Butt Crack': { standard: 25, pack: 23 },
    'Full Arms': { standard: 45, pack: 42 },
    'Half Arms': { standard: 30, pack: 28 },
    'Underarms': { standard: 25, pack: 23 },
    'Full Back': { standard: 55, pack: 52 },
    'Upper Back': { standard: 35, pack: 33 },
    'Lower Back': { standard: 35, pack: 33 },
    'Hipster (1/4 Back)': { standard: 30, pack: 28 },
    'Full Chest': { standard: 50, pack: 47 },
    'Upper Chest': { standard: 30, pack: 28 },
    'Lower Chest': { standard: 30, pack: 28 },
    'Belly (1/4 Chest)': { standard: 25, pack: 23 },
    'Full Legs': { standard: 75, pack: 72 },
    'Lower Legs': { standard: 45, pack: 42 },
    'Upper Legs': { standard: 50, pack: 47 },
    'Full Legs with Bikini': { standard: 130, pack: 125 },
    'Full Legs with Brazilian': { standard: 140, pack: 135 },
    'Full Body with Bikini': { standard: 250, pack: 240 },
    'Full Body with Brazilian': { standard: 260, pack: 250 },
    'Brows': { standard: 15, pack: 14 },
    'Lip': { standard: 12, pack: 11 },
    'Chin': { standard: 12, pack: 11 },
    'Cheeks': { standard: 20, pack: 18 },
    'Forehead': { standard: 15, pack: 14 },
    'Neck': { standard: 20, pack: 18 },
    'Sideburns': { standard: 15, pack: 14 },
    'Full Face': { standard: 50, pack: 47 },
    'Face': { standard: 50, pack: 47 },
    'Face w/o Brows': { standard: 45, pack: 42 },
    'Full Face w/o Brows': { standard: 45, pack: 42 },
    'Hands': { standard: 20, pack: 18 },
    'Fingers': { standard: 15, pack: 14 },
    'Brow Lamination': { standard: 75 },
    'Brow Lamination + Threading + Tinting': { standard: 95 },
    'Tinting (without threading)': { standard: 15 },
    'Tinting add-on (with threading)': { standard: 10 },
    'Basic Facial': { standard: 65 },
    'Hydra Facial': { standard: 120 },
    'Carbon CO2 Therapy': { standard: 150 },
    'Microdermabrasion': { standard: 100 },
    'Natural Deep Cleansing Facial': { standard: 80 },
    'Detox Facial': { standard: 85 },
    'Diamond Lifting Facial': { standard: 140 },
    '24k Gold Luxury Facial': { standard: 180 },
    'Lash Lifting': { standard: 80 },
    'Lash Lifting w/tinting': { standard: 95 },
    'Lash Tinting': { standard: 30 },
    'Natural Lashes Extension': { standard: 120 },
    'Classic Lashes Extension': { standard: 150 },
    'Hybrid Lashes Extension': { standard: 180 },
    'Volume Lashes Extension': { standard: 200 },
    'Lash Removal': { standard: 25 }
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe(data => {
      this.data = data;
      this.servicesContact = data.hero?.servicesContact || [];
      this.brandName = data.brandName || 'Merinaz';
      this.calendlyLinks = data.hero?.calendlyLinks || [];
    });
  }

  toggleLocationDropdown(serviceName: string, event: Event): void {
    event.stopPropagation();
    const key = serviceName;

    // Close all other dropdowns
    Object.keys(this.showLocationDropdown).forEach(k => {
      if (k !== key) {
        this.showLocationDropdown[k] = false;
      }
    });

    // Toggle current dropdown
    this.showLocationDropdown[key] = !this.showLocationDropdown[key];
  }

  bookService(calendlyLink: string): void {
    window.open(calendlyLink, '_blank');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // This will close dropdowns when clicking outside
    const target = event.target as HTMLElement;
    if (!target.closest('.book-section')) {
      this.closeDropdowns();
    }
  }

  closeDropdowns(): void {
    Object.keys(this.showLocationDropdown).forEach(k => {
      this.showLocationDropdown[k] = false;
    });
  }

  filterServices(category: string): void {
    this.selectedCategory = category;

    // Scroll to top of services section
    this.scrollToServicesTop();
  }

  scrollToServicesTop(): void {
    // Find the services-main element and scroll to it
    const servicesElement = document.querySelector('.services-main');
    if (servicesElement) {
      const headerOffset = 100; // Offset for fixed header
      const elementPosition = servicesElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  get categoryDescription(): string {
    const descriptions: any = {
      'all': 'Waxing is a method of semi-permanent hair removal which removes the hair from the root. The effects last for between 2-6 weeks – depending on the individuals rate of hair growth, the time of year and how long you have been having the area waxed. Warm wax is applied to the skin in a thin layer. The hair becomes embedded in the wax and a strip is applied and then pulled off quickly, in the opposite direction of the hair growth, taking the hair with it.',
      'waxing': 'Professional soft waxing services for smooth, long-lasting results. Our gentle technique removes hair from the root, leaving your skin silky smooth for 2-6 weeks. Perfect for sensitive skin with minimal irritation.',
      'sugaring': 'Experience the ancient art of sugaring – a 100% natural hair removal method using only sugar, water, and lemon juice. Applied at body temperature, it is gentle on your skin, less painful than traditional waxing, and minimizes ingrown hairs.',
      'threading': 'Precise threading technique for perfect brow shaping and facial hair removal. This ancient method offers incredible precision and is ideal for sensitive skin, creating clean, defined lines that last for weeks.',
      'facial': 'Luxurious facial treatments designed to rejuvenate, cleanse, and nourish your skin. From basic facials to advanced treatments like Hydra Facial and 24k Gold Luxury Facial, we offer customized solutions for every skin type.',
      'eyelash': 'Transform your eyes with our professional eyelash services. From classic extensions to volume lashes, lash lifting, and tinting – enhance your natural beauty with long-lasting, stunning results.',
      'tinting': 'Enhance your natural features with professional brow and lash tinting. Add depth and definition without daily makeup, perfect for a polished, effortless look that lasts for weeks.',
      'trimming': 'Precision trimming services for perfectly groomed brows and facial hair. Our expert techniques ensure symmetrical, natural-looking results that complement your features.'
    };
    return descriptions[this.selectedCategory] || descriptions['all'];
  }

  get categoryTitle(): string {
    const titles: any = {
      'all': 'All Services',
      'waxing': 'Waxing Services',
      'sugaring': 'Sugaring Services',
      'threading': 'Threading Services',
      'facial': 'Facial Treatments',
      'eyelash': 'Eyelash Services',
      'tinting': 'Tinting Services',
      'trimming': 'Trimming Services'
    };
    return titles[this.selectedCategory] || 'Our Services';
  }

  get categoryBenefits(): string[] {
    const benefits: any = {
      'all': ['Professional Care', 'Sensitive Skin Friendly', 'Long-Lasting Results', 'Expert Techniques'],
      'waxing': ['Lasts 2-6 Weeks', 'Smooth Finish', 'Quick Service', 'Gentle on Skin'],
      'sugaring': ['100% Natural', 'Less Painful', 'Body Temperature', 'Prevents Ingrown Hairs'],
      'threading': ['Precise Results', 'No Chemicals', 'Perfect Brows', 'Minimal Irritation'],
      'facial': ['Deep Cleansing', 'Anti-Aging', 'Hydrating', 'Customized Treatment'],
      'eyelash': ['Long-Lasting', 'Natural Look', 'Professional Application', 'No Daily Mascara'],
      'tinting': ['Semi-Permanent', 'Natural Enhancement', 'Saves Time', 'Waterproof'],
      'trimming': ['Precise Shape', 'Natural Look', 'Expert Care', 'Quick Service']
    };
    return benefits[this.selectedCategory] || benefits['all'];
  }

  getPrice(serviceName: string): any {
    return this.servicePricing[serviceName] || null;
  }

  get filteredServices() {
    if (this.selectedCategory === 'all') {
      return this.servicesContact;
    }

    // More precise filtering based on category keywords
    return this.servicesContact.filter(service => {
      const serviceName = service.name.toLowerCase();
      const category = this.selectedCategory.toLowerCase();

      switch(category) {
        case 'waxing':
          return serviceName.includes('waxing');
        case 'sugaring':
          return serviceName.includes('sugaring');
        case 'threading':
          return serviceName === 'threading';
        case 'facial':
          return serviceName.includes('facial');
        case 'eyelash':
          return serviceName.includes('eyelash') || serviceName.includes('lash');
        case 'tinting':
          return serviceName.includes('tinting');
        case 'trimming':
          return serviceName.includes('trimming');
        default:
          return serviceName.includes(category);
      }
    });
  }

  get serviceCategories() {
    const categories = [
      { name: 'All Services', value: 'all' },
      { name: 'Waxing', value: 'waxing' },
      { name: 'Sugaring', value: 'sugaring' },
      { name: 'Threading', value: 'threading' },
      { name: 'Facial', value: 'facial' },
      { name: 'Eyelash', value: 'eyelash' },
      { name: 'Tinting', value: 'tinting' },
      { name: 'Trimming', value: 'trimming' }
    ];
    return categories;
  }

}
