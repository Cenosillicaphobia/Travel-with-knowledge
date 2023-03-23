import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  REST_API = environment.REST_API;
  API_KEY = environment.API_KEY;

  flyhtData:any

  constructor( private http: HttpClient ) { }

  setData(origin:string, destination:string, cabinClass:string, passengers:bigint){

    let data = {
      legs: [
        {
          from: origin,
          to: destination,
          passengers: passengers,
          class: cabinClass
        }
      ]
    };

    return this.flyhtData = data;
  }

  getFootprintData(){
    return this.http.post(this.REST_API, this.flyhtData, { headers: { Authorization: `Bearer ${this.API_KEY}` }});
  };

}
