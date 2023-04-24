import {SharedModule} from './../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CoreCommonModule} from '@core/common.module';

import {AuthLoginV2Component} from 'app/main/pages/authentication/auth-login-v2/auth-login-v2.component';
import {AlreadyAuthGuard} from 'app/@core/security/already-auth.guard';

// routing
const routes: Routes = [
    {
        redirectTo: 'login',
        pathMatch: 'full',
        path: 'auth',
    },
    {
        path: 'login',
        component: AuthLoginV2Component,
        data: {animation: 'auth'},
        canActivate: [AlreadyAuthGuard],

    },
];

@NgModule({
    declarations: [AuthLoginV2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CoreCommonModule,
        TranslateModule,
        SharedModule
    ],
})
export class AuthenticationModule {
}
