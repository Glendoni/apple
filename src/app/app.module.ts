import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './_guards';
import { JwtInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService, DynamicformService } from './_services';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { TestmateComponent } from './testmate/testmate.component';
import { RegisterComponent } from './register/register.component';

import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        HomeModule,
        AppRoutingModule,
        DynamicFormBuilderModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        TestmateComponent,
        RegisterComponent,
        AppComponent,
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        AlertService,
        DynamicformService,
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
