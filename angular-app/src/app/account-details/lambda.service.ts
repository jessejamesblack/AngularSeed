import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { AccountData } from './accountData';
import { AccountList } from './accountList';
@Injectable({
  providedIn: 'root'
})
export class LambdaService {

  url = "http://localhost:4200/assets/accountData.json";
  accountListUrl = "http://localhost:4200/assets/accountListData.json";
  apigatewayURL = "https://ihns2dghaj.execute-api.us-east-2.amazonaws.com/dev"
  constructor(private http: HttpClient) { }

  fetchData(): Observable<HttpResponse<AccountData>> {
    return this.http.get<HttpResponse<AccountData>>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }
  fetchAcountListData(): Observable<HttpResponse<AccountList>> {
    return this.http.get<HttpResponse<AccountList>>(this.accountListUrl)
    .pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
