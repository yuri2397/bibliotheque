import {DocumentResolver} from './../../@core/resolver/document.resolver';
import {OrderComponent} from './order/order.component';
import {UsersComponent} from './users/users.component';
import {AreaComponent} from './area/area.component';
import {DocumentsComponent} from './documents/documents.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';

import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';
import {AuthorsComponent} from './authors/authors.component';
import {AuthorsResolver} from 'app/@core/resolver/authors.resolver';

const appRoutes: Routes = [
    {
        path: 'admin',
        redirectTo: '/documents',
        pathMatch: 'full',
    },
    {
        path: 'documents',
        component: DocumentsComponent,
        loadChildren: () =>
            import('./documents/documents.module').then((m) => m.DocumentsModule),

    },
    {
        path: 'areas',
        component: AreaComponent,
        loadChildren: () => import('./area/area.module').then((m) => m.AreaModule),
    },

    {
        path: 'users',
        component: UsersComponent,
        loadChildren: () =>
            import('./users/users.module').then((m) => m.UsersModule),
    },
    {
        path: 'authors',
        component: AuthorsComponent,
        resolve: {
            authors: AuthorsResolver,
        },
    },
    {
        path: 'orders',
        component: OrderComponent,
        loadChildren: () =>
            import('./order/order.module').then((m) => m.OrderModule),
    },
];

@NgModule({
    declarations: [
        AuthorsComponent
    ],
    imports: [
        RouterModule.forChild(appRoutes),
        CommonModule,
        NgbModule,
        NgSelectModule,
        FormsModule,
        MiscellaneousModule,
        TranslateModule,
        SharedModule,
    ],

    providers: [],
})
export class PagesModule {
}
