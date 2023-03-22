import { Injectable } from '@angular/core';
import AirportsData from '../../assets/json/airports.json';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor() { }

  airports = AirportsData.map( airport => { return { city: airport.city, code: airport.code}});
  
};
