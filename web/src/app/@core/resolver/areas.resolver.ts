import { Paginate } from "app/@core/models/paginate.model";
import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { AreaService } from "app/main/services/area.service";
import { Observable, of } from "rxjs";
import { Area } from "../models/areas.model";

@Injectable({
  providedIn: "root",
})
export class AreasResolver implements Resolve<Paginate<Area>> {
  constructor(private _areaService: AreaService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Paginate<Area>> {
    return this._areaService.index({
      "with[]": ["shelf"],
    });
  }
}
