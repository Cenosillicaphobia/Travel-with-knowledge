import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit{

  constructor( private apiService: ApiService ){}

  responseData:any = '';

  ngOnInit(): void {
    
    setTimeout(()=>{
      this.apiService.getFootprintData().subscribe((data)=>{ this.responseData = data, console.log(this.responseData)})
    }, 3000);
  }

}
