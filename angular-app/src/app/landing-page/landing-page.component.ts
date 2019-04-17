import { Component, OnInit } from '@angular/core';
import { LambdaService } from '../lambda.service';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AccountList } from '../account-details/accountList';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

 accountListData : HttpResponse<AccountList>;

  constructor(private _lamdaService: LambdaService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this._lamdaService.fetchAcountListData()
    .subscribe((res) =>{
      if(res){
        console.log(res['results']);
        this.accountListData = res['results'];
        console
      }
    },
    err => {
      console.error('Failed to load account.', err);
    })
  }
}
