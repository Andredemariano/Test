import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import {DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class ApiService {

    constructor( @Inject(DOCUMENT) private document: any, private http: Http) {
        this.hostUrl = document.location.protocol + '//' + document.location.hostname + ':' + document.location.port;
    }

    hostUrl: string;

    getMessages() {
        return this.http.get(this.hostUrl + "/api/AdminApi");
    }
    removeMessage(id: number) {
        return this.http.delete(this.hostUrl + "/api/AdminApi/" + id).subscribe((res) => {
        });
    }
}