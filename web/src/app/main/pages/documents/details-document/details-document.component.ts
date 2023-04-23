import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Document } from "app/@core/models/document.mode";
import { DocumentService } from "app/main/services/document.service";
import { finalize } from "rxjs/operators";
import Swal from "sweetalert2";
import { TranslateService } from "@ngx-translate/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-details-document",
  templateUrl: "./details-document.component.html",
  styleUrls: ["./details-document.component.scss"],
})
export class DetailsDocumentComponent implements OnInit {
  document: Document;
  loading = true;

  constructor(
    private _documentService: DocumentService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _translateService: TranslateService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      console.log(data);
      this.document = data.document;
    });
  }

  findDocument(documentId: any) {
    this._documentService
      .show(documentId, {
        "with[]": [
          "author",
          "slugs",
          "document_copies",
          "available_copies",
          "borrowed_copies",
          "area",
          "shelf",
        ],
      })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (response) => {
          console.log(response);
          this.document = response;
        },
        error: (errors) => {
          console.log(errors);
        },
      });
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
              this._delete();
            }
          });
        },
      });
  }

  _delete() {
    this._documentService.delete(this.document.id).subscribe({
      next: (_) => {
        Swal.fire({
          icon: "success",
          title: this._translateService.instant("content.notifications.title"),
          text: this._translateService.instant(
            "content.notifications.confirm.delete.success"
          ),
          showConfirmButton: false,
          timer: 3000,
        }).then((_) => this._location.back());
      },
      error: (err) => {
        Swal.fire({
          icon: "error",
          title: this._translateService.instant("content.notifications.title"),
          text: this._translateService.instant(
            "content.notifications.confirm.delete.error"
          ),
          showConfirmButton: false,
          timer: 3000,
        });
      },
    });
  }
}
