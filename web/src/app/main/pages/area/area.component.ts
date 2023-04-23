import {Area} from 'app/@core/models/areas.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-area',
    templateUrl: './area.component.html',
    styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
    areas: Area[];

    constructor(private _router: Router, private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this._route.data.subscribe((data) => {
            console.log(data);
            this.areas = data.areas;

        });
    }

    show(item: Area) {
        this._router.navigate([`${item.id}/details`], {relativeTo: this._route});
    }
}
