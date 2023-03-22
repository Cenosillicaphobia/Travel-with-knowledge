import { Component } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor ( private jsonService: JsonService ){};

  airports = this.jsonService.airports

}
