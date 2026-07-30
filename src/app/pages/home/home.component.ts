import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  eyelashServices: string[] = [];
  contactLink: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe((data: any) => {
      if (data) {
        if (data.hero && data.hero.servicesContact) {
          const eyelashService = data.hero.servicesContact.find((s: any) => s.name === 'Eyelash');
          if (eyelashService && eyelashService.sub_services) {
            this.eyelashServices = eyelashService.sub_services;
          }
        }
        if (data.social && data.social.hrefPhone) {
          this.contactLink = data.social.hrefPhone;
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  setupScrollAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const sections = document.querySelectorAll('app-hero, app-about, app-services, .feature-section, app-discount-banner');
    sections.forEach(section => {
      section.classList.add('reveal');
      observer.observe(section);
    });
  }

}
