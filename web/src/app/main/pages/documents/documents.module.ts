import {TranslateModule} from '@ngx-translate/core';
import {DocumentDetailsResolver, DocumentResolver} from './../../../@core/resolver/document.resolver';
import {DocumentsComponent} from './documents.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreCommonModule} from '@core/common.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateDocumentComponent} from './create-document/create-document.component';
import {UpdateDocumentComponent} from './update-document/update-document.component';
import {DetailsDocumentComponent} from './details-document/details-document.component';
import {ListDocumentComponent} from './list-document/list-document.component';
import {ContentHeaderModule} from 'app/layout/components/content-header/content-header.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgSelectModule} from '@ng-select/ng-select';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

// routing
const routes: Routes = [
    {
        path: '',
        component: ListDocumentComponent,
        data: {animation: 'list'},
        resolve: {
            documents: DocumentResolver
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    },
    {
        path: ':uuid/details',
        component: DetailsDocumentComponent,
        data: {animation: 'detail'},
        resolve: {
            document: DocumentDetailsResolver
        },
    },
    {
        path: 'create',
        component: CreateDocumentComponent,

        data: {animation: 'detail'},
    },
    {
        path: ':uui/update',
        component: UpdateDocumentComponent,
        data: {animation: 'detail'},
        resolve: {
            document: DocumentDetailsResolver
        },
    },
];

@NgModule({
    declarations: [
        DocumentsComponent,
        CreateDocumentComponent,
        UpdateDocumentComponent,
        ListDocumentComponent,
        DetailsDocumentComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CoreCommonModule,
        ContentHeaderModule,
        NgxDatatableModule,
        TranslateModule,
        NgSelectModule,
        SweetAlert2Module,
    ],
    exports: [
        ListDocumentComponent
    ]
})
export class DocumentsModule {
}
