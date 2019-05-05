import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home/home-routing.module';
import {HomeComponent} from './home/home.component';
import { FormComponent } from './form/form.component';
import {DynamicFormBuilderModule} from "../dynamic-form-builder/dynamic-form-builder.module";
import { FormSubListingComponent } from './form-sub-listing/form-sub-listing.component';



@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        DynamicFormBuilderModule,
    ],
    declarations: [HomeComponent, FormComponent, FormSubListingComponent]
})
export class HomeModule {
}
