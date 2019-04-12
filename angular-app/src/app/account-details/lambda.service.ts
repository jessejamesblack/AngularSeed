import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AccountData } from './accountData';
@Injectable({
  providedIn: 'root'
})
export class LambdaService {

  url = "http://localhost:4200/assets/accountData.json";
  constructor(private http: HttpClient) { }

  fetchData() : Observable<AccountData> {
    return this.http.get<AccountData>(this.url);
  }

}
