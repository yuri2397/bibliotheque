import { AuthenticationService } from "./../../../../auth/service/authentication.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";

import { first, takeUntil } from "rxjs/operators";
import { pipe, Subject } from "rxjs";

import { CoreConfigService } from "@core/services/config.service";
import { TranslateService } from "@ngx-translate/core";
import { ToastrService, GlobalConfig } from "ngx-toastr";
import { ActivatedRoute, Router } from "@angular/router";
import { CoreLoadingScreenService } from "@core/services/loading-screen.service";

@Component({
  selector: "app-auth-login-v2",
  templateUrl: "./auth-login-v2.component.html",
  styleUrls: ["./auth-login-v2.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AuthLoginV2Component implements OnInit {
  //  Public
  public coreConfig: any;
  public loginForm: UntypedFormGroup;
  public submitted = false;
  public passwordTextType: boolean;
  param = { value: "world" };
  // Private
  private _unsubscribeAll: Subject<any>;
  returnUrl: any;
  loading = false;
  errorMessage!: string;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    private _coreConfigService: CoreConfigService,
    private _formBuilder: UntypedFormBuilder,
    public translate: TranslateService,
    private _authService: AuthenticationService,
    private _toastrService: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this._unsubscribeAll = new Subject();

    // Configure the layout
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

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  /**
   * On Submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this._authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first())
      .subscribe({
        next: (response) => {
          this._authService
            .getCurrentUser({
              "with[]": [
                "permissions",
              ],
            })
            .subscribe({
              next: (user: any) => {
                this.loading = false;
                let m = "";
                let t = "";
                this.translate
                  .get("auth.login.ok.message")
                  .subscribe((text) => (m = text));
                this.translate
                  .get("auth.login.ok.title")
                  .subscribe((text) => (t = text));
                this._toastrService.success(`👋 ${m}`, t, {
                  toastClass: "toast ngx-toastr",
                  closeButton: true,
                });

                this._router.navigate([this.returnUrl]);
              },
            });
        },
        error: (errors) => {
          console.log('ERROR', errors);
          this.loading = false;
          if(errors && errors.status == 401){
            this.errorMessage = errors.error.message;

          }
        },
      });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required],
    });

    this.returnUrl =
      this._route.snapshot.queryParams["returnUrl"] || "/admin";

    // Subscribe to config changes
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.coreConfig = config;
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
