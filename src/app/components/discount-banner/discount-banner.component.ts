import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-discount-banner',
  templateUrl: './discount-banner.component.html',
  styleUrls: ['./discount-banner.component.scss']
})
export class DiscountBannerComponent implements OnInit {

  bannerData: any = {};
  galleryImages: any[] = [];
  bannerImage: string = 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3769eb58-5c23-4250-8b2e-a50866c5cff1_4.jpg';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe((data: any) => {
      if (data) {
        this.bannerData = data;
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

}
