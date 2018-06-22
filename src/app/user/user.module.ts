import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user/user-routing.module';
import { UserComponent } from './user/user.component';
import { EditComponent } from './user/edit.component';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserComponent, EditComponent]
})
export class UserModule { }
