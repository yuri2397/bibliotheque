import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { Param } from "app/@core/models/base.model";
import { Document } from "app/@core/models/document.mode";
import { Paginate } from "app/@core/models/paginate.model";
import Swal from "sweetalert2";
import { DocumentService } from "../../../services/document.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-list-document",
  templateUrl: "./list-document.component.html",
  styleUrls: ["./list-document.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ListDocumentComponent implements OnInit {
  public contentHeader: any;
  public load = false;
  documents: Paginate<Document>;
  public queryParams: Param = {};
  public basicSelectedOption = 5;
  searchTimeout: NodeJS.Timeout;
  deletedRow: Document;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _translateService: TranslateService,
    private _modalService: NgbModal,
    private _documentService: DocumentService
  ) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.documents = data.documents;
    });

    this._route.queryParams.subscribe((data) => {
      this.queryParams = JSON.parse(JSON.stringify(data));
    });

    this.contentHeader = {
      headerTitle: this._translateService.instant("documents.list"),
      actionButton: false,
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
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.paginate();
    }, 500);
  }

  paginate(page?: {
    count?: number;
    limit?: number;
    offset?: number;
    pageSize?: number;
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

  openCreateModal(modal: any) {
    this._modalService
      .open(modal, {
        centered: true,
        size: "lg",
      })
      .result.then((result) => {
        if (result) {
          this._router
            .navigate([], {
              queryParams: this.queryParams,
              relativeTo: this._route,
            })
            .then();
        }
      })
      .catch((_) => {});
  }

  ConfirmTextOpen() {
    this._translateService
      .get(["content.notifications.confirm.delete", "content"])
      .subscribe({
        next: (data: string[]) => {
          const text = data["content.notifications.confirm.delete"];
          const content = data["content"];
          Swal.fire({
            title: text.title,
            text: text.text,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: content.btn_confirm,
            cancelButtonText: content.btn_close,
          }).then((result) => {
            if (result.isConfirmed) {
              this._delete(this.deletedRow);
            }
          });
        },
      });
  }

  _delete(row: Document) {
    this._documentService.delete(row.id).subscribe({
      next: (_) => {
        this.documents.data = this.documents.data.filter(
          (item) => item.id !== row.id
        );
        this.documents.data = [...this.documents.data];
        Swal.fire({
          icon: "success",
          title: this._translateService.instant("content.notifications.title"),
          text: this._translateService.instant(
            "content.notifications.confirm.delete.success"
          ),
          showConfirmButton: false,
          timer: 3000,
        }).then((_) => this.paginate());
      },
      error: (err) => {
        this._translateService
          .get(["content.notifications.confirm.delete.error", "content.notifications.title"])
          .subscribe({
            next: (data: string[]) => {
              const text = data["content.notifications.confirm.delete.error"];
              const title = data["content.notifications.title"];
              Swal.fire({
                icon: "error",
                title: title,
                text: text,
                showConfirmButton: false,
                timer: 3000,
              });
            },
          });
      },
    });
  }
}
