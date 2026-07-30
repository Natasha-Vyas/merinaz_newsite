import { Component, OnInit } from '@angular/core';
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
