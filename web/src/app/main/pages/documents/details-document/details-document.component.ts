import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Document } from "app/@core/models/document.mode";
import { DocumentService } from "app/main/services/document.service";
import { finalize } from "rxjs/operators";

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
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      console.log(params)
      this.findDocument(params.uuid);
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
}
