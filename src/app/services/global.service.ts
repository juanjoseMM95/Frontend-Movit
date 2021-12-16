import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

 public urlPrincipal = "http://api-rest-laravel.com.devel/"

  constructor(private _http:HttpClient) { }

  /**
   *
   * @param url
   * @param params
   * @returns
   */

   addData(url: string, params: any): Observable<any> {
    let json = JSON.stringify(params);
    let data = 'json=' + json;

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.urlPrincipal + url, data, {
      headers: headers,
    });
  }
}
