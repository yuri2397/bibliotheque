import { AuthorService } from 'app/main/services/author.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Paginate } from '../models/paginate.model';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsResolver implements Resolve<Paginate<Author>> {
  constructor(private _service: AuthorService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Paginate<Author>> {
    return this._service.index(route.queryParams);
  }
}
