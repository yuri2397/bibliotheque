import { Paginate } from "../models/paginate.model";
import { DocumentService } from "./../../main/services/document.service";
import { inject, Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { Document } from "../models/document.mode";
import { first } from "rxjs/operators";

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
    return this._documentService.index(params);
  }
}

@Injectable({
  providedIn: "root",
})
export class DocumentDetailsResolver implements Resolve<Document> {
  constructor(private _documentService: DocumentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Document> {
    let params = route.queryParams;
    return this._documentService
      .show(route.paramMap.get("uuid") ?? "", {
        "with[]": [
          "author",
          "slugs",
          "document_copies",
          "available_copies",
          "borrowed_copies",
          "area",
          "shelf",
        ],
      })
      .pipe(first());
  }
}
