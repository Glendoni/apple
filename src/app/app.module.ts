import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

import { AuthGuard } from './_guards';
import { JwtInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeModule }     from './home/home.module';
import { LoginComponent }     from './login/login.component';
import { TestmateComponent } from './testmate/testmate.component';
import { RegisterComponent } from './register/register.component';
import { UserModule} from './user/user.module';
import { BodyComponent } from './layout/body/body.component';
 import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        HomeModule,
         UserModule,
        NgxSmartModalModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        TestmateComponent,
        RegisterComponent,
        BodyComponent,
        HeaderComponent,
FooterComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        AlertService,
        NgxSmartModalService,
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