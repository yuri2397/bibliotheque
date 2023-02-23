import { DocumentService } from "./../../../services/document.service";
import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { AuthorService } from "app/main/services/author.service";
import { ToastrService } from "ngx-toastr";
import { finalize, first } from "rxjs/operators";
import { Author } from "app/@core/models/author.model";

@Component({
  selector: "app-create-document",
  templateUrl: "./create-document.component.html",
  styleUrls: ["./create-document.component.scss"],
})
export class CreateDocumentComponent implements OnInit {
  @Input("modal") modal: any;
  form: FormGroup;
  createdLoad = false;
  authorLoading: boolean;
  waitBeforeSearch: NodeJS.Timeout;
  authors: Author[] = [];

  constructor(
    private _toastrService: ToastrService,
    private _translateService: TranslateService,
    private _modalService: NgbModal,
    private _authorService: AuthorService,
    private _documentService: DocumentService
  ) {}

  ngOnInit(): void {
    this.getAuthors();
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.min(0)]),
      summary: new FormControl(null, [Validators.required]),
      author_id: new FormControl(),
    });
  }

  getAuthors(searchQuery?: string) {
    this.authorLoading = true;
    this._authorService
      .index({
        search_query: searchQuery,
      })
      .pipe(finalize(() => (this.authorLoading = false)))
      .subscribe({
        next: (response) => (this.authors = response.data),
      });
  }

  get title() {
    return this.form.get("title");
  }

  get summary() {
    return this.form.get("summary");
  }

  get author_id() {
    return this.form.get("author_id");
  }

  onAuthorSearch(data: string) {
    if (data && data.length > 2) {
      // wait 500 ms and search
      if (this.waitBeforeSearch) clearTimeout(this.waitBeforeSearch);
      this.waitBeforeSearch = setTimeout(() => {
        this.getAuthors(data);
      }, 500);
    }
  }

  submit(form: any) {
    this.createdLoad = true;
    console.log(form);
    // this._classLevelCourseService
    //   .create(form)
    //   .pipe(finalize(() => (this.createdLoad = false)))
    //   .subscribe({
    //     next: (response) => {
    //       console.log(response);
    //       this._toastrService.success(
    //         this._translateService.instant("course.create.message.success"),
    //         this._translateService.instant("content.notifications.title")
    //       );
    //       this.modal.close(response);
    //     },
    //     error: (errors) => {
    //       console.log(errors);
    //       this._toastrService.error(
    //         this._translateService.instant("course.create.message.error"),
    //         this._translateService.instant("content.notifications.title")
    //       );
    //     },
    //   });
  }
}
