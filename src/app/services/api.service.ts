import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  passengers:number = 1;
  origin:string = '';
  destination:string = '';
  cabinClass:string = '';
  currencies:string = '';

  

}
