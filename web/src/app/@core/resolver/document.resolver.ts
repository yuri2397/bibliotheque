import { Paginate } from "../models/paginate.model";
import { DocumentService } from "./../../main/services/document.service";
import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { Document } from "../models/document.mode";

@Injectable({
  providedIn: "root",
})
export class DocumentResolver implements Resolve<Paginate<Document>> {
  constructor(private _documentService: DocumentService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Paginate<Document>> {
    let params = route.queryParams;
    console.log("PARAMS", params)

    return this._documentService.index({
      'with[]': ["author"],
      'per_page': 10,
      'page': 1
    });
  }
}
