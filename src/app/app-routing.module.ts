import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';


import {TestmateComponent} from './testmate/testmate.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormMenuComponent} from './form-menu/form-menu.component';
//import {FieldTextComponent} from './fields/field-text/field-text.component';
const appRoutes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'form-menu', component: FormMenuComponent},
    //{path: 'filed-text', component: FieldTextComponent},
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
