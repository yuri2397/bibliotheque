import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService  extends AbstractService{

  constructor(private client:HttpClient) { 
    super('/user',client);
  }
}
