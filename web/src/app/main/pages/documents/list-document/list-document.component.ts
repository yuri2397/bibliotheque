import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Document } from 'app/@core/models/document.mode';
import { Paginate } from 'app/@core/models/paginate.model';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.scss']
})
export class ListDocumentComponent implements OnInit {

  documents: Paginate<Document>;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      this.documents = data.documents;
      console.log(data)
    });
  }
}
