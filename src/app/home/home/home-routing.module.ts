import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent }  from './home.component';
import { ListComponent }  from './list.component';
import { BusComponent }  from '../bus/bus.component';
import { AwayComponent }  from '../away/away.component';
import { DepartmentDetailComponent } from '../department-detail/department-detail.component';
import { DepartmentListComponent } from '../department-list/department-list.component';

import { EmployeeListComponent } from '../employee-list/employee-list.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentOverviewComponent } from '../department-overview/department-overview.component';
import { DepartmentContactComponent } from '../department-contact/department-contact.component';


import { AuthGuard } from '../../_guards';
const homeRoutes: Routes = [
  
    {path: 'bus', component: BusComponent, canActivate: [AuthGuard]},
    {path: 'away', component: AwayComponent, canActivate: [AuthGuard]},

    { path: 'employees',   component: EmployeeListComponent },
    {
    path: 'away', component: AwayComponent},
    
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
    {
        
    path: 'home',
    component: HomeComponent
    },{
        
    path: 'list',
    component: ListComponent
    },
    {path: 'department-list', component: DepartmentListComponent},
     
    ], 
       {
       path: 'departments/:id', 
    component: DepartmentDetailComponent,
    children: [
    { path: 'overview', component: DepartmentOverviewComponent},
    { path: 'contact', component: DepartmentContactComponent},
        ]
    },
    
    }
    
    ];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
//export const  HomeRoutingModule= RouterModule.forRoot(homeRoutes);
export class HomeRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/