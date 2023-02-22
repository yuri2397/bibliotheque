import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Area } from 'app/@core/models/areas.model';
import { AbstractService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AreaService extends AbstractService<Area>{

  constructor(private client: HttpClient) {
    super('/areas', client);
   }
}
