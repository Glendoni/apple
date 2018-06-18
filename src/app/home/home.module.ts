import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home/home-routing.module'; 
import { HomeComponent } from './home/home.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';


@NgModule({
  imports: [
    CommonModule,
    NgxSmartModalModule.forRoot(),
    HomeRoutingModule  
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }
