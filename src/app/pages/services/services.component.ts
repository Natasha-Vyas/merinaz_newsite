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
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 9; // 3 rows x 3 columns
  serviceMetadata: { [key: string]: any } = {};

  // Pricing with fallback values
  servicePricing: any = {
    'Bikini': { standard: 60, pack3: 58, pack6: 55 },
    'Brazilian': { standard: 70, pack3: 68, pack6: 65 },
    'Full Butt': { standard: 65, pack3: 60, pack6: 57 },
    'Butt Cheeks': { standard: 30, pack3: 28, pack6: 26 },
    'Butt Crack': { standard: 25, pack3: 23, pack6: 21 },
    'Full Arms': { standard: 45, pack3: 42, pack6: 40 },
    'Half Arms': { standard: 30, pack3: 28, pack6: 26 },
    'Underarms': { standard: 25, pack3: 23, pack6: 21 },
    'Full Back': { standard: 55, pack3: 52, pack6: 50 },
    'Upper Back': { standard: 35, pack3: 33, pack6: 31 },
    'Lower Back': { standard: 35, pack3: 33, pack6: 31 },
    'Hipster (1/4 Back)': { standard: 30, pack3: 28, pack6: 26 },
    'Full Chest': { standard: 50, pack3: 47, pack6: 45 },
    'Upper Chest': { standard: 30, pack3: 28, pack6: 26 },
    'Lower Chest': { standard: 30, pack3: 28, pack6: 26 },
    'Belly (1/4 Chest)': { standard: 25, pack3: 23, pack6: 21 },
    'Full Legs': { standard: 75, pack3: 72, pack6: 70 },
    'Lower Legs': { standard: 45, pack3: 42, pack6: 40 },
    'Upper Legs': { standard: 50, pack3: 47, pack6: 45 },
    'Full Legs with Bikini': { standard: 130, pack3: 125, pack6: 120 },
    'Full Legs with Brazilian': { standard: 140, pack3: 135, pack6: 130 },
    'Full Body with Bikini': { standard: 250, pack3: 240, pack6: 230 },
    'Full Body with Brazilian': { standard: 260, pack3: 250, pack6: 240 },
    'Brows': { standard: 15, pack3: 14, pack6: 13 },
    'Lip': { standard: 12, pack3: 11, pack6: 10 },
    'Chin': { standard: 12, pack3: 11, pack6: 10 },
    'Cheeks': { standard: 20, pack3: 18, pack6: 16 },
    'Forehead': { standard: 15, pack3: 14, pack6: 13 },
    'Neck': { standard: 20, pack3: 18, pack6: 16 },
    'Sideburns': { standard: 15, pack3: 14, pack6: 13 },
    'Full Face': { standard: 50, pack3: 47, pack6: 45 },
    'Face': { standard: 50, pack3: 47, pack6: 45 },
    'Face w/o Brows': { standard: 45, pack3: 42, pack6: 40 },
    'Full Face w/o Brows': { standard: 45, pack3: 42, pack6: 40 },
    'Hands': { standard: 20, pack3: 18, pack6: 16 },
    'Fingers': { standard: 15, pack3: 14, pack6: 13 },
    'Nano Brows (Hair Stroke)': { standard: 750 },
    'Combo Brows': { standard: 700 },
    'Powder Ombre Brows': { standard: 550 },
    'Corrective Eyebrows': { standard: 800 },
    'Freckles Tattoo': { standard: 450 },
    'Eyeliner': { standard: 400 },
    'Lip Blush': { standard: 500 },
    'Dark Lip Neutralization': { standard: 650 },
    'Brow Lamination': { standard: 75 },
    'Brow Lamination + Threading + Tinting': { standard: 95 },
    'Tinting (without threading)': { standard: 15 },
    'Tinting add-on (with threading)': { standard: 10 },
    'Basic Facial': { standard: 90 },
    'Hydra Facial': { standard: 160 },
    'Microdermabrasion': { standard: 125 },
    'Lash Lifting': { standard: 80 },
    'Lash Lifting w/tinting': { standard: 95 },
    'Lash Lifting and Tinting': { standard: 95 },
    'Lash Tinting': { standard: 30 },
    'Natural Lashes Extension': { standard: 120 },
    'Classic Lashes Extension': { standard: 150 },
    'Hybrid Lashes Extension': { standard: 180 },
    'Volume Lashes Extension': { standard: 200 },
    'Lash Removal': { standard: 25 }
  };

  serviceDescriptions: { [key: string]: string } = {
    'Nano Brows (Hair Stroke)': 'Includes one free touch-up within 2 months.',
    'Combo Brows': 'Touch-up available within 2 months.',
    'Powder Ombre Brows': 'Includes free touch-up.',
    'Corrective Eyebrows': 'Includes free touch-up.',
    'Freckles Tattoo': 'Permanent freckles tattoo service.',
    'Eyeliner': 'Permanent eyeliner service.',
    'Lip Blush': 'Includes free touch-up.',
    'Dark Lip Neutralization': 'Includes free touch-up.'
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe(data => {
      this.data = data;
      this.servicesContact = data.hero?.servicesContact || [];
      this.brandName = data.brandName || 'Merinaz';
      this.calendlyLinks = data.hero?.calendlyLinks || [];

      // Load pricing data from JSON (will override fallback values if available)
      this.loadPricingData(data);
    });
  }

  loadPricingData(data: any): void {
    this.serviceMetadata = {};

    (data.menu || []).forEach((menuBlock: any) => {
      (menuBlock.menu || []).forEach((menuPage: any) => {
        (menuPage.superCategory || []).forEach((superCategory: any) => {
          (superCategory.category || []).forEach((category: any) => {
            (category.items || []).forEach((section: any) => {
              (section.items || []).forEach((item: any) => {
                if (!item.itemName) {
                  return;
                }

                const groupName = this.getServiceGroupName(category.categoryName, section.subCategoryHeader || '');
                this.registerServiceMetadata(groupName, category.categoryName, item);
              });
            });
          });
        });
      });
    });
  }

  registerServiceMetadata(groupName: string, categoryName: string, item: any): void {
    const rows = [
      { label: item.heading, price: item.itemPrice },
      { label: item.heading2, price: item.itemPrice2 },
      { label: item.heading3, price: item.itemPrice3 }
    ].filter(row => row.label && row.price !== undefined && row.price !== null && row.price !== '');

    const metadata = {
      itemName: item.itemName,
      description: item.itemDescription || '',
      priceRows: rows.length > 0 ? rows : [{ label: 'Standard', price: item.itemPrice }]
    };

    [
      this.getMetadataKey(groupName, item.itemName),
      this.getMetadataKey(categoryName, item.itemName),
      this.normalizeValue(item.itemName)
    ].forEach(key => {
      this.serviceMetadata[key] = metadata;
    });
  }

  getServiceGroupName(categoryName: string, subCategoryHeader: string): string {
    const category = (categoryName || '').toLowerCase();
    const header = (subCategoryHeader || '').toLowerCase();

    if (category === 'waxing') {
      return header.includes('men') ? "Men's Soft Waxing" : "Women's Soft Waxing";
    }

    if (category === 'hard wax') {
      return header.includes('men') ? "Men's Hard Waxing" : "Women's Hard Waxing";
    }

    if (category === 'sugaring') {
      if (header.includes('facial')) {
        return 'Sugaring for facial hair removal';
      }
      return header.includes('men') ? 'Sugaring for Men' : 'Sugaring for Women';
    }

    if (category === 'trimming') {
      return header.includes('men') ? 'Trimming for Men' : 'Trimming for Women';
    }

    return categoryName;
  }

  getMetadataKey(groupName: string, serviceName: string): string {
    return `${this.normalizeValue(groupName)}::${this.normalizeValue(serviceName)}`;
  }

  normalizeValue(value: string): string {
    return (value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
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

  isPermanentMakeup(categoryName: string): boolean {
    return categoryName.toLowerCase().includes('permanent makeup');
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
    this.currentPage = 1; // Reset to first page when filtering

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
      'permanent': 'Permanent makeup services designed for polished, lasting definition. Choose from brows, eyeliner, freckles, and lip color treatments performed with precise, detail-focused techniques.',
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
      'permanent': 'Permanent Makeup',
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
      'permanent': ['Lasting Definition', 'Precision Work', 'Custom Look', 'Low Maintenance'],
      'tinting': ['Semi-Permanent', 'Natural Enhancement', 'Saves Time', 'Waterproof'],
      'trimming': ['Precise Shape', 'Natural Look', 'Expert Care', 'Quick Service']
    };
    return benefits[this.selectedCategory] || benefits['all'];
  }

  getServiceMetadata(groupName: string, serviceName: string): any {
    return this.serviceMetadata[this.getMetadataKey(groupName, serviceName)] ||
      this.serviceMetadata[this.normalizeValue(serviceName)] ||
      null;
  }

  getPriceRows(groupName: string, serviceName: string): any[] {
    const metadata = this.getServiceMetadata(groupName, serviceName);

    if (metadata?.priceRows?.length) {
      return metadata.priceRows;
    }

    const fallbackPrice = this.servicePricing[serviceName];
    if (!fallbackPrice) {
      return [];
    }

    return [
      { label: 'Standard', price: fallbackPrice.standard },
      { label: '3-Pack', price: fallbackPrice.pack3 },
      { label: '6-Pack', price: fallbackPrice.pack6 }
    ].filter(row => row.price !== undefined && row.price !== null && row.price !== '');
  }

  getServiceDescription(groupName: string, serviceName: string): string {
    const metadata = this.getServiceMetadata(groupName, serviceName);
    return metadata?.description || this.serviceDescriptions[serviceName] || '';
  }

  get filteredServices() {
    let filtered = this.servicesContact;

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
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
            return serviceName === 'facial' || serviceName === 'facials';
          case 'eyelash':
            return serviceName.includes('eyelash') || serviceName.includes('lash');
          case 'permanent':
            return serviceName.includes('permanent');
          case 'tinting':
            return serviceName.includes('tinting');
          case 'trimming':
            return serviceName.includes('trimming');
          default:
            return serviceName.includes(category);
        }
      });
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      filtered = filtered.map(service => {
        // Filter sub_services that match the search query
        const matchingSubServices = service.sub_services.filter((subService: string) =>
          subService.toLowerCase().includes(query)
        );

        // Return service only if it has matching sub_services or the service name matches
        if (matchingSubServices.length > 0 || service.name.toLowerCase().includes(query)) {
          return {
            ...service,
            sub_services: matchingSubServices.length > 0 ? matchingSubServices : service.sub_services
          };
        }
        return null;
      }).filter(service => service !== null);
    }

    return filtered;
  }

  // Get paginated services with flattened sub-services
  get paginatedServices() {
    const allServices: any[] = [];

    // Flatten all sub-services into individual items
    this.filteredServices.forEach(service => {
      service.sub_services.forEach((subService: string) => {
        allServices.push({
          categoryName: service.name,
          serviceName: subService
        });
      });
    });

    // Calculate pagination
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return allServices.slice(startIndex, endIndex);
  }

  get paginatedServiceGroups() {
    const groups: any[] = [];

    this.paginatedServices.forEach(item => {
      let group = groups.find(service => service.name === item.categoryName);

      if (!group) {
        group = {
          name: item.categoryName,
          sub_services: []
        };
        groups.push(group);
      }

      group.sub_services.push(item.serviceName);
    });

    return groups;
  }

  get totalPages(): number {
    const allServices: any[] = [];
    this.filteredServices.forEach(service => {
      allServices.push(...service.sub_services);
    });
    return Math.ceil(allServices.length / this.itemsPerPage);
  }

  get totalServices(): number {
    let total = 0;
    this.filteredServices.forEach(service => {
      total += service.sub_services.length;
    });
    return total;
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    const end = this.currentPage * this.itemsPerPage;
    return end > this.totalServices ? this.totalServices : end;
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.scrollToServicesTop();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.scrollToServicesTop();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.scrollToServicesTop();
    }
  }

  get serviceCategories() {
    const categories = [
      { name: 'All Services', value: 'all' },
      { name: 'Waxing', value: 'waxing' },
      { name: 'Sugaring', value: 'sugaring' },
      { name: 'Threading', value: 'threading' },
      { name: 'Facial', value: 'facial' },
      { name: 'Eyelash', value: 'eyelash' },
      { name: 'Permanent Makeup', value: 'permanent' },
      { name: 'Tinting', value: 'tinting' },
      { name: 'Trimming', value: 'trimming' }
    ];
    return categories;
  }

}
