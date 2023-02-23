import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from 'app/@core/models/author.model';
import { AbstractService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends AbstractService<Author>{

  constructor(private client: HttpClient) {
    super('/authors', client);
   }
}
