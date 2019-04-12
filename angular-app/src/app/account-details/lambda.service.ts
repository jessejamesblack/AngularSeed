import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AccountData } from './accountData';
@Injectable({
  providedIn: 'root'
})
export class LambdaService {

  url = "http://localhost:4200/assets/accountData.json";
  apigatewayURL = "https://ihns2dghaj.execute-api.us-east-2.amazonaws.com/dev"
  constructor(private http: HttpClient) { }

  fetchData() : Observable<AccountData> {
    return this.http.get<AccountData>(this.url);
  }

}
