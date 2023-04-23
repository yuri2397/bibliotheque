import {Area} from 'app/@core/models/areas.model';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot,} from '@angular/router';
import {Observable} from 'rxjs';
import {AreaService} from 'app/main/services/area.service';
import {DocumentService} from '../../main/services/document.service';
import {Paginate} from '../models/paginate.model';
import {Document} from '../models/document.mode';

@Injectable({
    providedIn: 'root',
})
export class AreaDetailsResolver implements Resolve<Paginate<Document>> {
    constructor(private _documentService: DocumentService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Paginate<Document>> {
        return this._documentService.index({'area_id': route.params.uuid, ...route.queryParams});
    }
}
