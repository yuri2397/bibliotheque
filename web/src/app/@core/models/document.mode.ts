import {Author} from './author.model';
import {Model} from './base.model';
import {Area} from './areas.model';
import {Shelf} from './shelf.model';

export interface Document extends Model<Document> {
    title: string;
    summary: string;
    reference: string;
    raise: number;
    author_id: string;
    author: Author;
    area?: Area;
    shelf?: Shelf;
    shelf_id: string;

    status: 'available' | 'checked_out' | 'lost';
    created_at: Date;
    updated_at: Date;
    media: Media[];
    slugs: any[];
    document_copies: DocumentCopy[];
    available_copies: any[];
    borrowed_copies: any[];
}

export interface Media {
    id?: number;
    model_type?: string;
    model_id?: string;
    uuid?: string;
    collection_name?: string;
    name?: string;
    file_name?: string;
    mime_type?: string;
    disk?: string;
    conversions_disk?: string;
    size?: number;
    manipulations?: any[];
    custom_properties?: any[];
    generated_conversions?: any[];
    responsive_images?: any[];
    order_column?: number;
    created_at?: Date;
    updated_at?: Date;
    original_url?: string;
    preview_url?: string;
}


export interface DocumentCopy extends Model<DocumentCopy> {
    document_id: string;
    sub_reference: string;
    status: string;
    document?: Document;
}
