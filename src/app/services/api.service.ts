import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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
      Authorization: 'Bearer RJ0PSQYEYWMDJDGVV3GRVETYZXRN' 
    }
    
    this.http.post('https://beta3.api.climatiq.io/travel/flights', data, { headers: header})
    .subscribe( data => { console.log(data)});
    
  }

}
