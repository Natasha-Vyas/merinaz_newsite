import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe((data: any) => {
      if (data && data.hero && data.hero.servicesContact) {
        // Get featured services
        const serviceNames = ['Threading', 'Sugaring for Women', 'Facial', 'Eyelash'];

        this.services = data.hero.servicesContact
          .filter((s: any) => serviceNames.includes(s.name))
          .map((service: any) => ({
            title: service.name,
            description: service.sub_services ? `${service.sub_services.length}+ services available` : '',
            link: '/services',
            sub_services: service.sub_services ? service.sub_services.slice(0, 5) : []
          }));
      }
    });
  }

}
