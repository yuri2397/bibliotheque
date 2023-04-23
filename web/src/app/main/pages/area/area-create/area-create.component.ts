import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Author} from '../../../../@core/models/author.model';
import {Area} from '../../../../@core/models/areas.model';
import {Shelf} from '../../../../@core/models/shelf.model';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthorService} from '../../../services/author.service';
import {DocumentService} from '../../../services/document.service';
import {AreaService} from '../../../services/area.service';

@Component({
  selector: 'app-area-create',
  templateUrl: './area-create.component.html',
  styleUrls: ['./area-create.component.scss']
})
export class AreaCreateComponent implements OnInit {

  @Input('modal') modal: any;
  form: FormGroup;
  createdLoad = false;
  authorLoading: boolean;
  areaLoading: boolean;
  waitBeforeSearch: NodeJS.Timeout;
  authors: Author[] = [];
  previewImage: any;
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
  ngOnInit(): void {
  }

}
