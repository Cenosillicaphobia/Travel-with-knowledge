import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  REST_API = environment.REST_API;
  API_KEY = environment.API_KEY;

  constructor( private http: HttpClient ) { }

  getFootprint(origin:string, destination:string, cabinClass:string, passengers:bigint){

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

    let header = {
      Authorization: `Bearer ${this.API_KEY}`  
    }
    
    this.http.post(this.REST_API, data, { headers: header})
    .subscribe( data => { console.log(data)});
    
  }

}
