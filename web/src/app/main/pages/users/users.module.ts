import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent,
    DetailUserComponent,
    UpdateUserComponent,
    ListeUserComponent

  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
