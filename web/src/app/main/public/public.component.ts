import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CoreConfigService} from '@core/services/config.service';

@Component({
    selector: 'app-public',
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit , AfterViewInit{
    constructor(private _coreConfigService: CoreConfigService) {

    }
    ngOnInit(): void {
    }
    ngAfterViewInit() {
        this._coreConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                menu: {
                    hidden: true,
                },
                footer: {
                    hidden: true,
                },
                customizer: false,
                enableLocalStorage: false,
            },
        };
    }
}
