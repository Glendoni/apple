import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './_guards';
import { JwtInterceptor } from './_helpers';
import { AuthenticationService, UserService } from './_services';
import { HomeModule }     from './home/home.module';
import { LoginComponent }     from './login/login.component';
import { TestmateComponent } from './testmate/testmate.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        HomeModule
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        TestmateComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }