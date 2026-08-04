import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logo: string = '';
  brandName: string = '';
  address: string = '';
  contact: string = '';
  email: string = '';
  social: any = {};
  storeHours: any = {};
  newsletterEmail: string = '';
  newsletterSuccess: boolean = false;
  newsletterError: boolean = false;

  constructor(
    private dataService: DataService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe(data => {
      this.logo = data.logo;
      this.brandName = data.brandName || 'Merinaz';
      this.address = data.address;
      this.contact = data.contact;
      this.email = data.email;
      this.social = data.social;
      this.storeHours = data.storeHours || {};
    });
  }

  submitNewsletter(): void {
    if (this.newsletterEmail && this.validateEmail(this.newsletterEmail)) {
      this.apiService.submitNewsletterForm(this.newsletterEmail).subscribe({
        next: (response) => {
          this.newsletterSuccess = true;
          this.newsletterError = false;
          this.newsletterEmail = '';
          setTimeout(() => {
            this.newsletterSuccess = false;
          }, 5000);
        },
        error: (error) => {
          console.error('Newsletter submission error:', error);
          this.newsletterError = true;
          this.newsletterSuccess = false;
          setTimeout(() => {
            this.newsletterError = false;
          }, 5000);
        }
      });
    }
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
