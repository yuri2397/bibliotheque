import { TranslateService } from '@ngx-translate/core';
import { Author } from "app/@core/models/author.model";
import { AuthorService } from "app/main/services/author.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Paginate } from "app/@core/models/paginate.model";
import { Param } from "app/@core/models/base.model";
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-authors",
  templateUrl: "./authors.component.html",
  styleUrls: ["./authors.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AuthorsComponent implements OnInit {
  public contentHeader: any;
  public load = false;
  authors: Paginate<Author>;
  public queryParams: Param = {};
  public basicSelectedOption = 5;
  searchTimeout: NodeJS.Timeout;
  deletedRow: Author;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authorService: AuthorService,
    private _translateService: TranslateService,
    private _modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.authors = data.authors;
      console.log(this.authors)
    });

    this._route.queryParams.subscribe((data) => {
      this.queryParams = JSON.parse(JSON.stringify(data));
    });

    this.contentHeader = {
      headerTitle: this._translateService.instant('authors.title'),
      actionButton: false,
      breadcrumb: {
        type: "",
        links: [
          {
            name: this._translateService.instant('authors.header_name'),
            isLink: true,
            link: "/admin/authors",
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
      .get(["content.notifications.confirm.delete", "content.btn"])
      .subscribe({
        next: (data: string[]) => {
          const text = data["content.notifications.confirm.delete"];
          const btn = data["content.btn"];
          Swal.fire({
            title: text.title,
            text: text.text,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: btn.confirm,
            cancelButtonText: btn.cancel,
          }).then((result) => {
            if (result.isConfirmed) {
              this._delete(this.deletedRow);
            }
          });
        },
      });
  }

  _delete(row: Author) {
    this._authorService.delete(row.id).subscribe({
      next: (_) => {
        this.authors.data = this.authors.data.filter(
          (item) => item.id !== row.id
        );
        this.authors.data = [...this.authors.data];
        Swal.fire({
          icon: "success",
          title: this._translateService.instant("authors.delete"),
          text: this._translateService.instant("authors.delete"),
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
      },
      error: (err) => {},
    });
  }
}
