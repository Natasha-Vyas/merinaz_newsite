import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-discount-banner',
  templateUrl: './discount-banner.component.html',
  styleUrls: ['./discount-banner.component.scss']
})
export class DiscountBannerComponent implements OnInit {

  bannerData: any = {};
  galleryImages: any[] = [];
  bannerImage: string = "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a55a63ac-0025-44f0-b6fd-da171c74e56b_image1.png";
  calendlyLinks: any[] = [];
  showBookDropdown: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe((data: any) => {
      if (data) {
        this.bannerData = data;
        this.calendlyLinks = data.hero?.calendlyLinks || [];
        if (data.gallery && data.gallery.length > 10) {
          this.bannerImage = data.gallery[10];
        } else if (data.gallery && data.gallery.length > 0) {
          this.bannerImage = data.gallery[Math.floor(data.gallery.length / 2)];
        }
      }
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleBookDropdown(event?: Event): void {
    event?.stopPropagation();
    this.showBookDropdown = !this.showBookDropdown;
  }

  bookLocation(calendlyLink: string): void {
    window.open(calendlyLink, '_blank');
    this.showBookDropdown = false;
  }

  @HostListener('document:click', ['$event'])
  closeBookDropdownOnOutsideClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.book-dropdown')) {
      this.showBookDropdown = false;
    }
  }

}
