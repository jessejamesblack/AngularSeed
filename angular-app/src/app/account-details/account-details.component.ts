import { Component, OnInit } from '@angular/core';
import { LambdaService } from './lambda.service';

import { AccountData } from './accountData';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.less']
})
export class AccountDetailsComponent implements OnInit {
  accountData: AccountData;
  

  constructor(private lambdaService: LambdaService) { }

  ngOnInit() {
    this.getData();
  }

  getData () {
    this.lambdaService.fetchData().subscribe(
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
