import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponseRoutingModule } from './response-routing.module';
import { ResponseComponent } from './response.component';


@NgModule({
  declarations: [
    ResponseComponent
  ],
  imports: [
    CommonModule,
    ResponseRoutingModule
  ]
})
export class ResponseModule { }
