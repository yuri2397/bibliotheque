import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Paginate } from "app/@core/models/paginate.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-area",
  templateUrl: "./area.component.html",
  styleUrls: ["./area.component.scss"],
})
export class AreaComponent implements OnInit {
  areas: Paginate<any>;
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      console.log(data);
    });
  }
}
