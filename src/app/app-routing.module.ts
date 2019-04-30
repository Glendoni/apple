import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';


import {TestmateComponent} from './testmate/testmate.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormMenuComponent} from './form-menu/form-menu.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { StudyCreaterComponent } from './study-creater/study-creater.component';
import { StudyListingComponent } from './study-listing/study-listing.component';
import { StudyListingEditComponent } from './study-listing-edit/study-listing-edit.component';
//import {FieldTextComponent} from './fields/field-text/field-text.component';
import { InviteComponent } from './invite/invite.component';
const appRoutes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'form-menu', component: FormMenuComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'studycreater', component: StudyCreaterComponent},
    {path: 'studylisting/:id', component: StudyListingComponent},
    {path: 'studylistingedit/:id', component: StudyListingEditComponent},
    {path: 'invite/:id', component: InviteComponent},
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
                // preloadingStrategy: SelectivePreloadingStrategy,
                // data: { preload: true }

            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}
