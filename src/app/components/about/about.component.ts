import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  stats: any[] = [];
  features: any[] = [];
  aboutData: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMerinazData().subscribe((data: any) => {
      if (data) {
        this.aboutData = data;
        // Load stats and features if they exist in JSON
        if (data.stats) {
          this.stats = data.stats;
        }
        if (data.aboutFeatures) {
          this.features = data.aboutFeatures;
        }
      }
    });
  }

}
