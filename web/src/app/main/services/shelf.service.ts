import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractService } from "./base.service";

@Injectable({
  providedIn: "root",
})
export class ShelfService extends AbstractService<any> {
  constructor(private client: HttpClient) {
    super("/documents", client);
  }
}
