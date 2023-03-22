import { Component } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor ( private jsonService: JsonService ){};

  airports = this.jsonService.airports

  login( form: NgForm ){
    
    console.log(form.value)

  }

}
