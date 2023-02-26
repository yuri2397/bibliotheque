import { Component, OnInit } from "@angular/core";
import { CoreConfigService } from "@core/services/config.service";

@Component({
  selector: "app-public",
  templateUrl: "./public.component.html",
  styleUrls: ["./public.component.scss"],
})
export class PublicComponent implements OnInit {
  constructor(private _coreConfigService: CoreConfigService) {
    console.log(this._coreConfigService.config)
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

  ngOnInit(): void {}
}
