import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { UserResolver } from 'app/@core/resolver/user.resolver';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from '../../../update-user/update-user.component';


const routes :Routes = [
  {
    path :"",
    component : ListeUserComponent,
    data :{animation : "liste" },
    resolve : {
      user : UserResolver
    }
  },
  {
    path :"uui/detail",
    component : DetailUserComponent,
    data : {animation : "detail"},
  },
  {
    path : "create",
    component : CreateUserComponent,
    data : {animation : "create"},
  },
  {
    path : "uui/update",
    component : UpdateUserComponent,
    data : {animation : "update"}
  }

];

@NgModule({
  declarations: [
    UsersComponent,
    
  ],
  imports: [
    CommonModule,
  
  ]
})
export class UsersModule { }
