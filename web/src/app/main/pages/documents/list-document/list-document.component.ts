import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { Param } from "app/@core/models/base.model";
import { Document } from "app/@core/models/document.mode";
import { Paginate } from "app/@core/models/paginate.model";

@Component({
  selector: "app-list-document",
  templateUrl: "./list-document.component.html",
  styleUrls: ["./list-document.component.scss"],
})
export class ListDocumentComponent implements OnInit {
  public contentHeader: object;
  public load = false;
  documents: Paginate<Document>;
  public queryParams: Param = {};
  public basicSelectedOption: number = 5;
  searchTimeout: NodeJS.Timeout;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _translateService: TranslateService,
    private _modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.documents = data.documents;
      console.log(data);
    });

    this._route.queryParams.subscribe((data) => {
      this.queryParams = JSON.parse(JSON.stringify(data));
    });

    this.contentHeader = {
      headerTitle: "Documents",
      actionButton: true,
      breadcrumb: {
        type: "",
        links: [
          {
            name: "Liste documents",
            isLink: true,
            link: "/admin/documents",
          },
        ],
      },
    };
  }

  onSearch(event: any) {
    if (this.searchTimeout) clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.paginate();
    }, 500);
  }

  paginate(page?: {
    count: number;
    limit: number;
    offset: number;
    pageSize: number;
  }) {
    if (page) {
      this.queryParams.per_page = page.pageSize;
      this.queryParams.page = page.offset + 1;
    }
    console.log(this.queryParams);

    this._router.navigate(["./"], {
      queryParams: this.queryParams,
      relativeTo: this._route,
      replaceUrl: true,
    });
  }

  openCreateModal(modal: any) {}
}
