import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { User } from 'app/@core/models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient , private route : Route) { }
   create( user : User){
    // return this.http.post<any>(
    //   this. + '/',
    //   {

    //   }
    // )
   }
}
