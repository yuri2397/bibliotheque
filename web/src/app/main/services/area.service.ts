import { Injectable } from '@angular/core';
import { AbstractService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AreaService extends AbstractService{

  constructor() {
    super('/areas');
   }
}
