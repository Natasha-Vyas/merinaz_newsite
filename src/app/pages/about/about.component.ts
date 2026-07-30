import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutPageComponent implements OnInit {

  data: any = {};
  brandName: string = '';
  footerText: string = '';
  about: string[] = [];
  gallery: string[] = [];
  testimonials: any[] = [];
  mainImage: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe(data => {
      this.data = data;
      this.brandName = data.brandName || 'Merinaz';
      this.footerText = data.footerText || '';
      this.about = data.hero?.about || [];
      this.gallery = data.gallery || [];
      this.testimonials = data.testimonials || [];
      // Use placeholder if no image available
      this.mainImage = this.gallery[0] || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80';
    });
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
