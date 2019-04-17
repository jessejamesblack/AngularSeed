import { Component, OnInit } from '@angular/core';
import { LambdaService } from './lambda.service';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AccountData } from './accountData';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.less']
})
export class AccountDetailsComponent implements OnInit {

  accountData: HttpResponse<AccountData>;
  paramData : any;
  accountDetailsData : any;
  details : any;
  

  constructor(private lambdaService: LambdaService,
              private _activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((data)=>{
      this.paramData = data;
      this.lambdaService.fetchData().subscribe((data)=>{
        this.accountDetailsData = data;
        console.log("accnt deta", this.accountDetailsData)
        this.accountDetails(this.accountDetailsData);
      })
    })
     
    // this.getData();
  }

  getData () {
    this.lambdaService.fetchData().subscribe(
      data => {
        if (data) {
          this.accountData = data
          console.log(this.accountData);
        }
      },
      err => {
        console.error('Failed to load account.', err);
      }
    )
  }

  accountDetails(data){
    for(let i of data){
      if(i.accountNumber == this.paramData.accNo){
        this.details = i;
      }
      
    }
  }

}
