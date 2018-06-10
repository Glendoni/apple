import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule }     from './home/home.module';
 
 

@NgModule({
  declarations: [
    AppComponent
     
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
