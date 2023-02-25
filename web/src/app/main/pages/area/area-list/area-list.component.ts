import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Area } from "app/@core/models/areas.model";
import { Paginate } from "app/@core/models/paginate.model";

@Component({
  selector: "app-area-list",
  templateUrl: "./area-list.component.html",
  styleUrls: ["./area-list.component.scss"],
})
export class AreaListComponent implements OnInit {
  public contentHeader: object;
  area : Paginate<Area>;
  areas: Area[];
  constructor(private _router: Router,
     private _route: ActivatedRoute,
   
     private _modalService: NgbModal
     ) {}

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

  openCreateModal(modal: any) {
    this._modalService
      .open(modal, {
        centered: true,
      })
      .result.then((result) => {
        if (result) {
          const index = this.area.data.findIndex(
            (item) => item.id === result.id
          );
          this.area.data[index] = result;
          this.area.data = [...this.area.data];
        }
      })
      .catch((_) => {});
  }
}
