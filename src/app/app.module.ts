import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './_guards';
import { JwtInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService, DynamicformService,FormService } from './_services';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { TestmateComponent } from './testmate/testmate.component';
import { RegisterComponent } from './register/register.component';

import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
import { FormMenuComponent } from './form-menu/form-menu.component';
import { FieldTextComponent } from './fields/field-text/field-text.component';
import { FieldCheckboxComponent } from './fields/field-checkbox/field-checkbox.component';
import { FieldRadioComponent } from './fields/field-radio/field-radio.component';
import { FieldTextboxComponent } from './fields/field-textbox/field-textbox.component';
import { FieldDropdownComponent } from './fields/field-dropdown/field-dropdown.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudyListingComponent } from './study-listing/study-listing.component';
import { StudyCreaterComponent } from './study-creater/study-creater.component';
import { StudyListingEditComponent } from './study-listing-edit/study-listing-edit.component';
import { StudyCreaterEditComponent } from './study-creater-edit/study-creater-edit.component';
import { UsersComponent } from './users/users.component';
import { AddStudyUsersComponent } from './add-study-users/add-study-users.component';
import { InviteComponent } from './invite/invite.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { SubListingComponent } from './sub-listing/sub-listing.component';
import { SubUserListingComponent } from './sub-user-listing/sub-user-listing.component';
import { SubUsersComponent } from './sub-users/sub-users.component';
import { SubListingEditComponent } from './sub-listing-edit/sub-listing-edit.component';
import { InviteStudyUsersComponent } from './invite-study-users/invite-study-users.component';

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
        FormMenuComponent,
        FieldCheckboxComponent,
        FieldRadioComponent,
        FieldTextboxComponent,
        FieldDropdownComponent,
        FieldTextComponent,
        DashboardComponent,
        StudyListingComponent,
        StudyCreaterComponent,
        StudyListingEditComponent,
        StudyCreaterEditComponent,
        UsersComponent,
        AddStudyUsersComponent,
        InviteComponent,
        SubCategoryComponent,
        SubListingComponent,
        SubUserListingComponent,
        SubUsersComponent,
        SubListingEditComponent,
        InviteStudyUsersComponent,
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        AlertService,
        DynamicformService,
        FormService,
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
