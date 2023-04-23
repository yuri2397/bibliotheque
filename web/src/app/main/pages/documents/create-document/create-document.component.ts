import {DocumentService} from './../../../services/document.service';
import {Component, Input, OnInit} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators,
} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';
import {AuthorService} from 'app/main/services/author.service';
import {ToastrService} from 'ngx-toastr';
import {finalize, first} from 'rxjs/operators';
import {Author} from 'app/@core/models/author.model';
import {Area} from '../../../../@core/models/areas.model';
import {AreaService} from '../../../services/area.service';
import {Shelf} from '../../../../@core/models/shelf.model';

@Component({
    selector: 'app-create-document',
    templateUrl: './create-document.component.html',
    styleUrls: ['./create-document.component.scss'],
})
export class CreateDocumentComponent implements OnInit {
    @Input('modal') modal: any;
    form: FormGroup;
    createdLoad = false;
    authorLoading: boolean;
    areaLoading: boolean;
    waitBeforeSearch: NodeJS.Timeout;
    authors: Author[] = [];
    previewImage: any;
    areas: Area[] = [];
    shelfs: Array<Shelf> | undefined;
    private formData: FormData = new FormData();

    constructor(
        private _toastrService: ToastrService,
        private _translateService: TranslateService,
        private _modalService: NgbModal,
        private _authorService: AuthorService,
        private _documentService: DocumentService,
        private _areaService: AreaService
    ) {
    }

    get title() {
        return this.form.get('title');
    }

    get summary() {
        return this.form.get('summary');
    }

    get author_id() {
        return this.form.get('author_id');
    }

    get reference() {
        return this.form.get('reference');
    }

    get copies() {
        return this.form.get('copies');
    }

    get area_id() {
        return this.form.get('area_id');
    }

    get shelf_id() {
        return this.form.get('shelf_id');
    }

    ngOnInit(): void {
        this.getAuthors();
        this.getArea();
        this.form = new FormGroup({
            title: new FormControl(null, [Validators.required, Validators.min(0)]),
            summary: new FormControl(null, [Validators.required]),
            author_id: new FormControl(null, [Validators.required]),
            area_id: new FormControl(null, [Validators.required]),
            shelf_id: new FormControl(null, [Validators.required]),
            copies: new FormControl(1, [Validators.required, Validators.min(1)]),
            reference: new FormControl()
        });
    }

    getAuthors(searchQuery?: string) {
        this.authorLoading = true;
        this._authorService
            .index({
                q: searchQuery ?? '',
            })
            .pipe(finalize(() => (this.authorLoading = false)))
            .subscribe({
                next: (response: any) => (this.authors = response),
            });
    }

    onAuthorSearch(data: any) {
        if (data && data.length > 2) {
            // wait 500 ms and search
            if (this.waitBeforeSearch) {
                clearTimeout(this.waitBeforeSearch);
            }
            this.waitBeforeSearch = setTimeout(() => {
                this.getAuthors(data);
            }, 500);
        }
    }

    onAreaChange(data: any) {
        if (data) {
            if (this.area_id?.value) {
                this.shelfs = this.areas.find(item => item.id === this.area_id?.value)?.shelf;
                console.log(this.shelfs);
            }
        }
    }

    submit(form: any) {
        this.createdLoad = true;
        console.log(form);
        // form data from form
        this.formData.append('title', this.title?.value);
        this.formData.append('summary', this.summary?.value);
        this.formData.append('author_id', this.author_id?.value);
        this.formData.append('reference', this.reference?.value);
        this.formData.append('copies', this.copies?.value);
        this.formData.append('area_id', this.area_id?.value);
        this.formData.append('shelf_id', this.shelf_id?.value);

        this._documentService
            .create(this.formData)
            .pipe(finalize(() => (this.createdLoad = false)))
            .subscribe({
                next: (response) => {
                    console.log(response);
                    this._toastrService.success(
                        this._translateService.instant('documents.create_success'),
                        this._translateService.instant('content.notifications.success')
                    );
                    this.modal.close(response);
                },
                error: (errors) => {
                    console.log(errors);
                    this._toastrService.error(
                        this._translateService.instant('course.create_error'),
                        this._translateService.instant('content.notifications.errors')
                    );
                },
            });
    }

    chooseImage(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                console.log(reader.result);
                this.previewImage = reader.result;
            };
            this.formData.append('image', file);
        }
    }

    private getArea(searchQuery?: string) {
        this.areaLoading = false;
        this._areaService.index({
            q: searchQuery ?? '',
            'with[]': ['shelf']
        })
            .pipe(first(), finalize(() => this.areaLoading = false))
            .subscribe({
                next: (response: any) => {
                    console.log(response);
                    this.areas = response;
                }
            });
    }
}
