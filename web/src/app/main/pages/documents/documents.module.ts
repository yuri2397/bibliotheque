import { TranslateModule } from '@ngx-translate/core';
import { DocumentResolver } from './../../../@core/resolver/document.resolver';
import { DocumentsComponent } from "./documents.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CreateDocumentComponent } from "./create-document/create-document.component";
import { UpdateDocumentComponent } from "./update-document/update-document.component";
import { DetailsDocumentComponent } from "./details-document/details-document.component";
import { ListDocumentComponent } from './list-document/list-document.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// routing
const routes: Routes = [
  {
    path: "",
    component: ListDocumentComponent,
    data: { animation: "list" },
    resolve: {
      documents: DocumentResolver
    }
  },
  {
    path: ":uuid/details",
    component: DetailsDocumentComponent,
    data: { animation: "detail" },
  },
  {
    path: "create",
    component: CreateDocumentComponent,
    data: { animation: "detail" },
  },
  {
    path: ":uui/update",
    component: UpdateDocumentComponent,
    data: { animation: "detail" },
  },
];

@NgModule({
  declarations: [
    DocumentsComponent,
    CreateDocumentComponent,
    UpdateDocumentComponent,
    ListDocumentComponent,
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
  ],
})
export class DocumentsModule {}
