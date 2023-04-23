import {Document} from 'app/@core/models/document.mode';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Area} from 'app/@core/models/areas.model';
import {Paginate} from '../../../../@core/models/paginate.model';
import {Param} from '../../../../@core/models/base.model';

@Component({
    selector: 'app-area-details',
    templateUrl: './area-details.component.html',
    styleUrls: ['./area-details.component.scss'],
})
export class AreaDetailsComponent implements OnInit {
    documents: Document[];
    public contentHeader: any;
    load = false;

    public queryParams: Param = {};
    public basicSelectedOption = 5;
    searchTimeout: NodeJS.Timeout;
    deletedRow: Document;

    constructor(private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this._route.data.subscribe((data) => {
            console.log(data);
            this.documents = data.documents;
        });

        this._route.queryParams.subscribe((data) => {
            this.queryParams = JSON.parse(JSON.stringify(data));
        });

        this.contentHeader = {
            headerTitle: 'Détails',
            actionButton: false,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Accueil',
                        isLink: true,
                    }  ]
            }
        };
    }

    searchInArea(data: string) {
    }

    docDetails(doc: Document) {
        // AFFICHER UN DRAWER AVEC LES INFORMATIONS DU DOCUMENT
    }

    paginate($event: any) {

    }
}
