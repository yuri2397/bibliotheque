import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from 'app/@core/models/document.mode';
import { AbstractService } from './base.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends AbstractService<Document> {

  constructor(private client: HttpClient) {
    super('/documents', client);
   }
   override create(data: any): Observable<any> {
      return super.create(data);
   }
}
