import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DocumentService} from '../../services/document.service';
import {CoreConfigService} from '../../../../@core/services/config.service';
import {finalize, first} from 'rxjs/operators';
import {Document} from '../../../@core/models/document.mode';

@Component({
    selector: 'app-public-search-document',
    templateUrl: './public-search-document.component.html',
    styleUrls: ['./public-search-document.component.scss']
})
export class PublicSearchDocumentComponent implements OnInit {

    searchKey = '';
    searchLoad = false;
    documents: Document[] = [];

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _documentService: DocumentService,
        private _coreConfigService: CoreConfigService
    ) {
    }

    ngOnInit(): void {
        this._route.queryParams.subscribe((data) => {
            this.searchKey = data.search_query;
            console.log(data);
            this.searchLoad = true;
            this._documentService.index({
                q: this.searchKey,
                'with[]': ['author']
            }).pipe(first(), finalize(() => this.searchLoad = false))
                .subscribe({
                    next: (response: any) => {
                        console.log(response);
                        this.documents = response;
                    }
                });
        });
    }

    ngAfterViewInit() {
        this._coreConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                menu: {
                    hidden: true,
                },
                footer: {
                    hidden: true,
                },
                customizer: false,
                enableLocalStorage: false,
            },
        };
    }

    reload(data: string) {
        if (!data) {
            this.searchLoad = true;
            this._documentService.index({
                q: this.searchKey
            }).pipe(first(), finalize(() => this.searchLoad = false))
                .subscribe({
                    next: (response: any) => {
                        console.log(response);
                        this.documents = response;
                    }
                });
        }
    }

    search(data: string) {
        this.searchLoad = true;
        this._documentService.index({
            q: this.searchKey,
            'with[]': ['author']
        }).pipe(first(), finalize(() => this.searchLoad = false))
            .subscribe({
                next: (response: any) => {
                    console.log(response);
                    this.documents = response;
                }
            });
    }
}
