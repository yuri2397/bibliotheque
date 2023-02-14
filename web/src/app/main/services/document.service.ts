import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends AbstractService{

  constructor(private client: HttpClient) {
    super('/documents', client);
   }
}
