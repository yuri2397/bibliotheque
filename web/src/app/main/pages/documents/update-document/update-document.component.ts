import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentService } from 'app/main/services/document.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.scss']
})
export class UpdateDocumentComponent implements OnInit {

  private id: string;
  document: any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _documentService: DocumentService
  ) { }

  ngOnInit(): void {
    this._route.data.pipe(first()).subscribe(data => {
      this.document = data.document;
      console.log(data)
    })
  }


}
