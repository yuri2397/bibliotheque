import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    DocumentDetailsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
