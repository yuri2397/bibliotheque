import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "app/main/shared/shared.module";
import { AreaComponent } from "./area.component";
import { AreaDetailsComponent } from "./area-details/area-details.component";
import { RouterModule, Routes } from "@angular/router";
import { AreaListComponent } from "./area-list/area-list.component";
import { AreasResolver } from "app/@core/resolver/areas.resolver";
import { AreaDetailsResolver } from "app/@core/resolver/area-details.resolver";

const routes: Routes = [
  {
    path: "",
    component: AreaListComponent,
    data: { animation: "list" },
  },
  {
    path: ":uuid/details",
    component: AreaDetailsComponent,
    resolve: {
      area: AreaDetailsResolver
    },
    data: { animation: "detail" },
  },
];

@NgModule({
  declarations: [AreaComponent, AreaDetailsComponent, AreaListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AreaModule {}
