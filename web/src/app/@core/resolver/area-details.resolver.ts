import { Area } from "app/@core/models/areas.model";
import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { AreaService } from "app/main/services/area.service";

@Injectable({
  providedIn: "root",
})
export class AreaDetailsResolver implements Resolve<Area> {
  constructor(private _areaService: AreaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Area> {
    console.log("AREA DETAIL RESOLVER", route.params)
    return this._areaService.show(route.params.uuid, {
      'with[]': ['shelf.documents'],
    });
  }
}
