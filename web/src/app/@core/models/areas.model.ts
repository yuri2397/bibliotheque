import {Shelf} from './shelf.model';
import {Model} from './base.model';
import {Document} from './document.mode';

export class Area extends Model<Area> {
    name: string;
    slug: string;
    description: string;
    shelf: Array<Shelf>;
    documents: Array<Document>;
}
