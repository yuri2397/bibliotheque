import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Area } from "app/@core/models/areas.model";

@Component({
  selector: "app-area-list",
  templateUrl: "./area-list.component.html",
  styleUrls: ["./area-list.component.scss"],
})
export class AreaListComponent implements OnInit {
  public contentHeader: object;

  areas: Area[];
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      console.log(data);
      this.areas = data.areas;
    });

    this.contentHeader = {
      headerTitle: "Rayons",
      breadcrumb: {
        type: "",
        links: [
          {
            name: "Liste rayons",
            isLink: true,
            link: "/admin/areas",
          },
        ],
      },
    };
  }

  show(item: Area) {
    this._router.navigate([`${item.id}/details`], { relativeTo: this._route });
  }
}
