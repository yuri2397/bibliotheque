import { DocumentResolver } from "./../../@core/resolver/document.resolver";
import { OrderComponent } from "./order/order.component";
import { UsersComponent } from "./users/users.component";
import { AreaComponent } from "./area/area.component";
import { DocumentsComponent } from "./documents/documents.component";
import { AuthGuard } from "./../../auth/helpers/auth.guards";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";

import { CoreCommonModule } from "@core/common.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";

import { AuthenticationModule } from "./authentication/authentication.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { OrderModule } from "./order/order.module";
import { UsersModule } from "./users/users.module";
import { ComponentsModule } from "../components/components.module";
import { SharedModule } from "../shared/shared.module";

const appRoutes: Routes = [
  {
    path: "admin",
    redirectTo: "/documents",
    pathMatch: "full",
  },
  {
    path: "documents",
    component: DocumentsComponent,
    loadChildren: () =>
      import("./documents/documents.module").then((m) => m.DocumentsModule),
    resolve: {
      documents: DocumentResolver,
    },
  },
  {
    path: "areas",
    component: AreaComponent,
    loadChildren: () => import("./area/area.module").then((m) => m.AreaModule),
  },

  {
    path: "users",
    component: UsersComponent,
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },

  {
    path: "orders",
    component: OrderComponent,
    loadChildren: () =>
      import("./order/order.module").then((m) => m.OrderModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    MiscellaneousModule,
    TranslateModule,
    SharedModule
  ],

  providers: [],
})
export class PagesModule {}
