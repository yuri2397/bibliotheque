import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {ToastrModule} from 'ngx-toastr'; // For auth after login toast

import {CoreModule} from '@core/core.module';
import {CoreCommonModule} from '@core/common.module';
import {CoreSidebarModule, CoreThemeCustomizerModule} from '@core/components';

import {coreConfig} from 'app/app-config';

import {AppComponent} from 'app/app.component';
import {LayoutModule} from 'app/layout/layout.module';
import {SampleModule} from 'app/main/sample/sample.module';
import {AuthenticationModule} from './main/pages/authentication/authentication.module';
import {AuthGuard} from './auth/helpers/auth.guards';
import {JwtInterceptor} from './auth/helpers/jwt.interceptor';
import {ErrorInterceptor} from './auth/helpers/error.interceptor';
import {AlreadyAuthGuard} from './@core/security/already-auth.guard';
import {PublicComponent} from './main/public/public.component';
import {SharedModule} from './main/shared/shared.module';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/public',
        pathMatch: 'full',
    },
    {
        path: 'public',
        component: PublicComponent,
        loadChildren: () =>
            import('./main/public/public.module').then((m) => m.PublicModule)
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./main/pages/pages.module').then((m) => m.PagesModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./main/pages/authentication/authentication.module').then(
                (m) => m.AuthenticationModule
            ),
    },

    {
        path: '**',
        redirectTo: '/pages/miscellaneous/error'
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, {
            scrollPositionRestoration: 'enabled',
        }),
        TranslateModule.forRoot(),

        NgbModule,
        ToastrModule.forRoot(),

        // Core modules
        CoreModule.forRoot(coreConfig),
        CoreCommonModule,
        CoreSidebarModule,
        CoreThemeCustomizerModule,
        TranslateModule,
        SharedModule,
        // App modules
        LayoutModule,
        SampleModule,
        AuthenticationModule,

    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
