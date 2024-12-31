import { Component, Input, OnInit } from '@angular/core';
import { FarmService } from '../service/farm.service';

@Component({
  selector: 'app-weather-status',
  templateUrl: './weather-status.component.html',
  styleUrls: ['./weather-status.component.css']
})
export class WeatherStatusComponent implements OnInit{
  farms: any[] = [];

  constructor(private farmService: FarmService) {}

  ngOnInit(): void {
    // Récupérer les données des fermes via le service
    this.farmService.getFarms().subscribe(
      (data) => {
        this.farms = data;
      },
      (error) => {
        console.error('Error fetching farms:', error);
      }
    );
  }
}
