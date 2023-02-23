import { Document } from 'app/@core/models/document.mode';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Area } from 'app/@core/models/areas.model';
import { ActiveToast } from 'ngx-toastr';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.scss']
})
export class AreaDetailsComponent implements OnInit {
  area: Area;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.area = data.area;
      this.area.shelf.sort((a, b) => a.level - b.level);
      console.log("data: ", data);
    })
  }

  searchInArea(data: string){

  }

  docDetails(doc: Document){
    // AFFICHER UN DRAWER AVEC LES INFORMATIONS DU DOCUMENT
  }

}
