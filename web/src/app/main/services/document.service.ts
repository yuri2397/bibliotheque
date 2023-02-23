import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from 'app/@core/models/document.mode';
import { AbstractService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends AbstractService<Document>{

  constructor(private client: HttpClient) {
    super('/documents', client);
   }
}
