import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'

import { HttpClient } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CoreCommonModule } from '@core/common.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {
  SwiperConfigInterface,
  SwiperModule,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper'

import { CoreSidebarModule } from '@core/components'
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module'
import { NouisliderModule } from 'ng2-nouislider'
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { NgSelectModule } from '@ng-select/ng-select'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module'
// AoT requires an exported function for factories

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  observer: true,
}

@NgModule({
  declarations: [],
  exports: [
    TranslateModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ContentHeaderModule,
    CoreCommonModule,
    NgbModule,
    NouisliderModule,
    CardSnippetModule,
    NgxDatatableModule,
    CoreSidebarModule,
    NgSelectModule,
    SweetAlert2Module,
  ],
  imports: [
    CommonModule,
    CardSnippetModule,
    NgxDatatableModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient],
    //   },
    //   defaultLanguage: 'fr',
    // }),
    ToastrModule.forRoot(),
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    CoreTouchspinModule,
    ContentHeaderModule,
    CoreSidebarModule,
    CoreCommonModule,
    NgbModule,
    NouisliderModule,
    CoreSidebarModule,
    NgSelectModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class SharedModule {}