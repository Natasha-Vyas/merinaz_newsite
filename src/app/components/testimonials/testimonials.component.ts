import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials: any[] = [];
  currentIndex: number = 0;
  reviewerAvatars: string[] = [
    'assets/images/testimonials/reviewer-lidia.png',
    'assets/images/testimonials/reviewer-elsa-barrios.png',
    'assets/images/testimonials/reviewer-camren-perkins.png',
    'assets/images/testimonials/reviewer-natalie-amador-solis.png',
    'assets/images/testimonials/reviewer-tamika-anderson.png',
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe((data: any) => {
      if (data && data.testimonials) {
        this.testimonials = data.testimonials;
      }
    });
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number): void {
    this.currentIndex = index;
  }

  getReviewerAvatar(index: number): string {
    return this.reviewerAvatars[index % this.reviewerAvatars.length];
  }
}
