import { Author } from "./author.model";
import { Model } from "./base.model";

export interface Document extends Model<Document> {
  title: string;
  summary: string;
  reference: string;
  raise: number;
  author_id: string;
  author: Author;
  status: string;
  created_at: Date;
  updated_at: Date;
  media: any[];
}
