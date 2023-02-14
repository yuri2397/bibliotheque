import { Token } from "../../@core/models/token.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment as env } from "environments/environment";
import { User, Role } from "app/auth/models";
import { ToastrService } from "ngx-toastr";
import { Param, Permission } from "app/@core/models/base.model";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private _baseUrl!: string;
  private _token_key = "_enkot_ye";
  private _current_user_key = "currentUser";
  //public
  public currentUser: Observable<User>;

  //private
  private currentUserSubject: BehaviorSubject<User>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient) {
    this._baseUrl = `${env.apiUrl}/auth`;
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get isAuth() {
    return JSON.parse(localStorage.getItem(this._token_key)) && true;
  }

  public get token(): Token {
    return JSON.parse(localStorage.getItem(this._token_key)) as Token;
  }

  public set token(token: Token) {
    localStorage.setItem(this._token_key, JSON.stringify(token));
  }

  /**
   *  Confirms if user is admin
   */
  get isAdmin() {
    return true;
  }

  /**
   *  Confirms if user is client
   */
  get isClient() {
    return true;
  }

  get permissions(): Permission[] {
    return JSON.parse(localStorage.getItem("permissions")) as Permission[];
  }

  set permissions(permissions: Permission[]) {
    localStorage.setItem("permissions", JSON.stringify(permissions));
  }

  get roles() {
    return (JSON.parse(this._current_user_key)?.roles as Permission[]) ?? [];
  }

  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(username: string, password: string) {
    return this._http
      .post<any>(`${this._baseUrl}/login`, {
        username: username,
        password: password,
      })
      .pipe(
        map((response) => {
          console.log(response);
          if (response) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.token = {
              token_type: response.token_type,
              access_token: response.access_token,
            };
            this.permissions = response.permissions;
          }

          return response;
        })
      );
  }

  getCurrentUser(params?: Param) {
    return this._http
      .get(`${this._baseUrl}/current-user`, { params: params })
      .pipe(
        map((user: User) => {
          if (user) {
            localStorage.setItem(this._current_user_key, JSON.stringify(user));
            this.currentUserSubject.next(user);
          }
          return user;
        })
      );
  }

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    localStorage.removeItem(this._token_key);
    // notify
    this.currentUserSubject.next(null);
  }
}
