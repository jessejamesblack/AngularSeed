import { Component, OnInit } from '@angular/core';
import { LambdaService } from './lambda.service';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AccountData } from './accountData';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.less']
})
export class AccountDetailsComponent implements OnInit {
  accountData: HttpResponse<AccountData>;
  

  constructor(private lambdaService: LambdaService) { }

  ngOnInit() {
    this.getAccountInfoData();
  }

  getAccountInfoData () {
    this.lambdaService.fetchAccountInfoData().subscribe(
      data => {
        if (data) {
          console.log(data);
          this.accountData = data
          console.log(this.accountData);
        }
      },
      err => {
        console.error('Failed to load account.', err);
      }
    )
  }

}
