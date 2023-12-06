import { Injectable } from '@angular/core';

import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MasterService {
  baseApiUrl = "http://localhost:5001/";

  constructor(private http: HttpClient) {
  }


  public Get(apiPath: string, Data: any) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Origin', '*');
    let FullPath = this.baseApiUrl + apiPath;
    let params = new HttpParams();

    return this.http.get(FullPath, { params: Data, headers: headers }).pipe(map((res: Response) =>
      JSON.parse(JSON.stringify(res))
    ));
  }

  public Post(apiPath: string, Data: any) {
    var headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    let FullPath = this.baseApiUrl + apiPath;
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post(FullPath, Data, { headers: headers }).pipe(
      map((res: Response) =>
        JSON.parse(JSON.stringify(res))
      ));

  }
}





