import { Component, OnInit } from '@angular/core';
import { FarmService } from '../service/farm.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  farms: any[] = [];

  constructor(private farmService: FarmService) {}

  ngOnInit(): void {
    this.farmService.getFarms().subscribe((data) => {
      this.farms = data;
    });
  }
  openTaskModal(): void {
    console.log('Ajouter une tâche');
   
  }

}
