import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  sliderImages: any[] = [];
  heroData: any = {};
  galleryImages: any[] = [];
  calendlyLinks: any[] = [];
  showBookDropdown: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe((data: any) => {
      if (data) {
        this.heroData = data;
        if (data.slider && data.slider.length > 0) {
          this.sliderImages = data.slider;
        } else if (data.gallery && data.gallery.length > 0) {
          this.galleryImages = data.gallery;
        }
        this.calendlyLinks = data.hero?.calendlyLinks || [];
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
