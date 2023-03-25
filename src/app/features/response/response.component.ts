import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit{

  constructor( private apiService: ApiService, private router : Router ){}

  isLoading:boolean = false

  responseData:any = '';

  passengersNumber:any = this.apiService.flythPassengersNumber

  ngOnInit(): void {
    
    setTimeout(()=>{
      this.apiService.getFootprintData().subscribe((data)=>{ this.responseData = data })
    }, 3000);
  }

  goToHome(){
    this.isLoading = true
    setTimeout(()=>{ this.router.navigate(['/form'])}, 2000);
  }

}
