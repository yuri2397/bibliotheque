import { Area } from "app/@core/models/areas.model";
import { Model } from "./base.model";
import { Document } from "./document.mode";

export interface Shelf extends Model<Shelf> {
  level: number;
  area_id: string;
  area: Area;
  documents: Array<Document>;
}
