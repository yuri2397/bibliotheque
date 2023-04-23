import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from 'app/main/shared/shared.module';
import {AreaComponent} from './area.component';
import {AreaDetailsComponent} from './area-details/area-details.component';
import {RouterModule, Routes} from '@angular/router';
import {AreaListComponent} from './area-list/area-list.component';
import {AreasResolver} from 'app/@core/resolver/areas.resolver';
import {AreaDetailsResolver} from 'app/@core/resolver/area-details.resolver';
import {DocumentsModule} from '../documents/documents.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreCommonModule} from '../../../../@core/common.module';
import {ContentHeaderModule} from '../../../layout/components/content-header/content-header.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {TranslateModule} from '@ngx-translate/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {AreaCreateComponent} from './area-create/area-create.component';
import {ResumePipe} from 'app/@core/resume.pipe';
const routes: Routes = [
    {
        path: '',
        component: AreaListComponent,
        resolve: {
            areas: AreasResolver,
        },
        runGuardsAndResolvers: 'always',
        data: {animation: 'list'},
    },
    {
        path: ':uuid/details',
        component: AreaDetailsComponent,
        resolve: {
            documents: AreaDetailsResolver,
        },
        data: {animation: 'detail'},
    },
];

@NgModule({
    declarations: [AreaComponent, AreaDetailsComponent, AreaListComponent, AreaCreateComponent],
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
      SharedModule
  ],
})
export class AreaModule {
}
