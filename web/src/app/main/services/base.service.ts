import {HttpClient} from '@angular/common/http';
import {environment as env} from 'environments/environment';
import {first} from 'rxjs/operators';
import {Param} from '../../@core/models/base.model';
import {Paginate} from '../../@core/models/paginate.model';

export class AbstractService<T> {
    constructor(private _baseUrl: string, private _clientHttp?: HttpClient) {
        this.enpoint = env.apiUrl + _baseUrl;
        this.http = _clientHttp;
    }

    private _enpoint!: string;

    public get enpoint(): string {
        return this._enpoint;
    }

    public set enpoint(value: string) {
        this._enpoint = value;
    }

    private _http!: HttpClient;

    public get http(): HttpClient {
        if (this._http) {
            return this._http;
        }
        throw new Error(`The HttpClient is not initialized.
        In you constructor:\n
        constructor(private _ch: HttpClient){
          super('your_base_url', _ch)
        }`);
    }

    public set http(value: HttpClient) {
        this._http = value;
    }


    /**
     * CRUD FUNCTION
     */

    public index(params?: Param) {
        return this.http
            .get<Paginate<T>>(this.enpoint, {params: params})
            .pipe(first());
    }

    public create(data: T) {
        return this.http.post<T>(this.enpoint, data).pipe(
            first()
        );
    }

    public show(uuid: string, params?: Param) {
        return this.http
            .get<T>(`${this.enpoint}/${uuid}`, {params: params})
            .pipe(first());
    }

    public update(uuid: string, data: T) {
        return this.http.put<T>(`${this.enpoint}/${uuid}`, data).pipe(
            first()
        );
    }

    public delete(uuid: string) {
        return this.http.delete<T>(`${this.enpoint}/${uuid}`).pipe(
            first()
        )
    }

}
