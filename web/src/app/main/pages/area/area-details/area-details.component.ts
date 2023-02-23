import { Document } from "app/@core/models/document.mode";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Area } from "app/@core/models/areas.model";
import { ActiveToast } from "ngx-toastr";

@Component({
  selector: "app-area-details",
  templateUrl: "./area-details.component.html",
  styleUrls: ["./area-details.component.scss"],
})
export class AreaDetailsComponent implements OnInit {
  area: Area;
  public contentHeader: object;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.area = data.area;
      this.area.shelf.sort((a, b) => a.level - b.level);
      console.log("data: ", data);
    });

    this.contentHeader = {
      headerTitle: "Détails",
      breadcrumb: {
        type: "",
        links: [
          {
            name: "Liste rayons",
            isLink: true,
            link: "/admin/areas",
          },
          {
            name: "Rayon " + this.area?.name,
            isLink: false,
            link: "/admin/areas/" + this.area?.id + "/details",
          },
        ],
      },
    };
  }

  searchInArea(data: string) {}

  docDetails(doc: Document) {
    // AFFICHER UN DRAWER AVEC LES INFORMATIONS DU DOCUMENT
  }
}
