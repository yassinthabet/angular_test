import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  constructor() { }

  private farms = [
    {
      id: 1,
      name: "Ferme Alpha",
      humidity: 45.5,
      temperature: 22.3,
      connectedValves: 3,
      totalValves: 5,
      weatherStatus: "Sunny",
      location: "36.8065, 10.1815"
    },
    {
      id: 2,
      name: "Ferme Beta",
      humidity: 30.0,
      temperature: 18.2,
      connectedValves: 2,
      totalValves: 2,
      weatherStatus: "Rainy",
      location: "35.8256, 10.6084"
    },
    {
      id: 3,
      name: "Ferme Beta",
      humidity: 30.0,
      temperature: 18.2,
      connectedValves: 2,
      totalValves: 2,
      weatherStatus: "Rainy",
      location: "35.8256, 10.6084"
    },
    {
      id: 4,
      name: "Ferme Beta",
      humidity: 30.0,
      temperature: 18.2,
      connectedValves: 2,
      totalValves: 2,
      weatherStatus: "Rainy",
      location: "35.8256, 10.6084"
    },
    {
      id: 2,
      name: "Ferme Beta",
      humidity: 30.0,
      temperature: 18.2,
      connectedValves: 2,
      totalValves: 2,
      weatherStatus: "Rainy",
      location: "35.8256, 10.6084"
    },
    {
      id: 2,
      name: "Ferme Beta",
      humidity: 30.0,
      temperature: 18.2,
      connectedValves: 2,
      totalValves: 2,
      weatherStatus: "Rainy",
      location: "35.8256, 10.6084"
    }
  ];

  getFarms(): Observable<any[]> {
    return of(this.farms);
  }
  getFarmById(id: number): Observable<any> {
    return of(this.farms.find(farm => farm.id === id));
  }
  
}
