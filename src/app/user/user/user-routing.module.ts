import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent }  from './user.component';
import { EditComponent }  from './edit.component';
import { AuthGuard } from '../../_guards';

 const userRoutes: Routes = [
  
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: EditComponent, canActivate: [AuthGuard] }, 
];

export const  UserRoutingModule= RouterModule.forRoot(userRoutes);
