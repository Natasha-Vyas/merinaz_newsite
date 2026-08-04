import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutPageComponent implements OnInit, OnDestroy {

  data: any = {};
  brandName: string = '';
  footerText: string = '';
  about: string[] = [];
  gallery: string[] = [];
  testimonials: any[] = [];
  aboutImages: string[] = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/d2e140ef-593c-4deb-bc44-eecd3c306dcc_image3.png',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/574ceb5d-5a00-48fc-a9ae-bfaa150981bc_image2.png',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/409b106d-d683-4e34-8f30-82ee807d320f_image5.png',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/9eb7548c-d729-4f92-b0cf-d66df0de9f71_image4.png'
  ];
  currentImageIndex: number = 0;
  sliderInterval: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe(data => {
      this.data = data;
      this.brandName = data.brandName || 'Merinaz';
      this.footerText = data.footerText || '';
      this.about = data.hero?.about || [];
      this.gallery = data.gallery || [];
      this.testimonials = data.testimonials || [];
    });

    // Start automatic slider
    this.startSlider();
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }

  startSlider(): void {
    this.sliderInterval = setInterval(() => {
      this.nextImage();
    }, 4000);
  }

  stopSlider(): void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.aboutImages.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.aboutImages.length) % this.aboutImages.length;
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
    this.stopSlider();
    this.startSlider();
  }

  getReviewerAvatar(index: number): string {
    // Generate consistent avatar for each reviewer
    const avatars = [
      'https://i.pravatar.cc/150?img=1',
      'https://i.pravatar.cc/150?img=5',
      'https://i.pravatar.cc/150?img=9',
      'https://i.pravatar.cc/150?img=10',
      'https://i.pravatar.cc/150?img=20'
    ];
    return avatars[index % avatars.length];
  }

}
