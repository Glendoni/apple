import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home/home-routing.module'; 
import { HomeComponent } from './home/home.component';
import { ListComponent } from './home/list.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { AwayComponent } from './away/away.component';
import { BusComponent } from './bus/bus.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';


@NgModule({
  imports: [
    CommonModule,
    NgxSmartModalModule.forRoot(),
    HomeRoutingModule  
  ],
  declarations: [ HomeComponent, AwayComponent,ListComponent, BusComponent, DepartmentDetailComponent, DepartmentListComponent, EmployeeListComponent, DepartmentContactComponent, DepartmentOverviewComponent ]
})
export class HomeModule { }
