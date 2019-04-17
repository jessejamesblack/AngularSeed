import { Component, OnInit } from '@angular/core';
import { LambdaService } from '../lambda.service';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AccountList } from '../account-details/accountList';
import { Router, Route } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

 accountListData : HttpResponse<AccountList>;

  constructor(private _lamdaService: LambdaService,
              private _router : Router) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this._lamdaService.fetchAcountListData()
    .subscribe((res) =>{
      if(res){
        console.log(res);
        this.accountListData = res;
      }
    },
    err => {
      console.error('Failed to load account.', err);
    })
  }

  goToRemedy(){
    console.log("I work!!");
  }
  goToAccountdetails(){
    this._router.navigateByUrl('accountDetails');
  }
}
