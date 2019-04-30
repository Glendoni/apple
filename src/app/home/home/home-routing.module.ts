//import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {FormComponent} from '../form/form.component';
import {AuthGuard} from '../../_guards';

const homeRoutes: Routes = [

    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            {
                path: 'form',
                component: FormComponent,
            }]
    }
];

export const HomeRoutingModule = RouterModule.forRoot(homeRoutes);


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
