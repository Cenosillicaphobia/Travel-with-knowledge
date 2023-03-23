import { Component } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor ( private jsonService: JsonService, private apiService: ApiService, private http: HttpClient, private router: Router ){};

  airports = this.jsonService.airports

  login( form: NgForm ){
    
    this.apiService.setData(form.value.origin.slice(-4, -1), form.value.destination.slice(-4, -1), form.value.cabinClass, form.value.passengers);
    this.router.navigate(['/response']);
  }

}
