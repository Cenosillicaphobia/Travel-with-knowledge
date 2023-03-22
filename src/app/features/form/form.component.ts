import { Component } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor ( private jsonService: JsonService, private apiService: ApiService, private http: HttpClient ){};

  airports = this.jsonService.airports

  login( form: NgForm ){
    
    this.apiService.getFootprint(form.value.origin, form.value.destination, form.value.cabinClass, form.value.passengers);

  }

}
