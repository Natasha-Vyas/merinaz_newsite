import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations: any[] = [];
  mapUrls: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe((data: any) => {
      if (data && data.hero && data.hero.calendlyLinks) {
        this.locations = data.hero.calendlyLinks;

        // Map URLs for each location (Google Maps embed)
        // Location 1: 1768 Columbia Rd NW, Floor 2 Washington DC, 20009
        // Location 2: 3500 Wisconsin Avenue NW, Suite A, Washington, DC 20016
        this.mapUrls = [
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.973876498881!2d-77.04528568464894!3d38.92475517956986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7e1cc1cb3e7%3A0x7c7c7c7c7c7c7c7c!2s1768%20Columbia%20Rd%20NW%2C%20Washington%2C%20DC%2020009!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus',
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.012345678901!2d-77.06989408464823!3d38.93678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7e1cc1cb4e8%3A0x8d8d8d8d8d8d8d8d!2s3500%20Wisconsin%20Ave%20NW%2C%20Washington%2C%20DC%2020016!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus'
        ];
      }
    });
  }

  getMapUrl(index: number): string {
    return this.mapUrls[index] || '';
  }

  getDirectionsUrl(index: number): string {
    const addresses = [
      '1768 Columbia Rd NW, Floor 2, Washington DC, 20009',
      '3500 Wisconsin Avenue NW, Suite A, Washington, DC 20016'
    ];
    const encodedAddress = encodeURIComponent(addresses[index] || addresses[0]);
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  }

}
