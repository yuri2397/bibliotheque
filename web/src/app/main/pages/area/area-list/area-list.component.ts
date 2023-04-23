import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Area} from 'app/@core/models/areas.model';
import {Paginate} from '../../../../@core/models/paginate.model';
import {Document} from '../../../../@core/models/document.mode';
import {Param} from '../../../../@core/models/base.model';
import Swal from 'sweetalert2';
import {TranslateService} from '@ngx-translate/core';
import {AreaService} from '../../../services/area.service';

@Component({
    selector: 'app-area-list',
    templateUrl: './area-list.component.html',
    styleUrls: ['./area-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AreaListComponent implements OnInit {
    public contentHeader: any;

    public load = false;
    public queryParams: Param = {};
    searchTimeout: NodeJS.Timeout;
    deletedRow: Area;

    areas: Paginate<Area>;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _translateService: TranslateService,
        private _areaService: AreaService
    ) {
    }

    ngOnInit(): void {
        this._route.data.subscribe((data) => {
            console.log(data);
            this.areas = data.areas;
        });
        this._route.queryParams.subscribe((data) => {
            this.queryParams = JSON.parse(JSON.stringify(data));
        });
    }

    show(item: Area) {
        this._router.navigate([`${item.id}/details`], {relativeTo: this._route});
    }

    paginate() {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: this.queryParams,
            queryParamsHandling: 'merge',
        });
    }

    onSearch(value: any) {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(() => {
            this.queryParams.search = value;
            this.queryParams.page = 1;
            this.paginate();
        }, 500);
    }

    openCreateModal(modal: any){

    }

    ConfirmTextOpen() {
        this._translateService
            .get(['content'])
            .subscribe({
                next: (data: string[]) => {
                    const content = data['content'];
                    Swal.fire({
                        title: content.notifications.confirm.delete.title,
                        text: content.notifications.confirm.delete.text,
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: content.btn_confirm,
                        cancelButtonText: content.btn_close,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this._delete(this.deletedRow);
                        }
                    });
                },
            });
    }

    private _delete(deletedRow: Area) {
        this._areaService.delete(deletedRow.id).subscribe({
            next: (data) => {
                this.areas.data = this.areas.data.filter((area) => area.id !== deletedRow.id);
                Swal.fire({
                    icon: 'success',
                    title: this._translateService.instant('notifications.title'),
                    text: this._translateService.instant('notifications.confirm.delete.success'),
                    showConfirmButton: false,
                    timer: 1500,
                });
            },
            error: (err) => {
                Swal.fire({
                    icon: 'error',
                    title: this._translateService.instant('notifications.title'),
                    text: this._translateService.instant('notifications.confirm.delete.error'),
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    }
}
