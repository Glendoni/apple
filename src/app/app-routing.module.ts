import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';


const appRoutes: Routes = [
    //{ path: '', redirectTo: '/home', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent }
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
