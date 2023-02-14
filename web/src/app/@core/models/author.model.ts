import { Model } from "./base.model";

export interface Author extends Model<Author>{
    name:       string;
    bio:        string;
    resume:     string;
    created_at: Date;
    updated_at: Date;
    media:      any[];
}
