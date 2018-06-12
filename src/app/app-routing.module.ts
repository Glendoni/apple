import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';


import { TestmateComponent }  from './testmate/testmate.component';
import { LoginComponent }  from './login/login.component';
import { RegisterComponent }  from './register/register.component';

const appRoutes: Routes = [
  
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
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
export class AppRoutingModule { }
