import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'default',
    component: DefaultComponent
  },
  {
    path: 'accountDetails/:accNo',
    component: AccountDetailsComponent
  },
  {
    path: 'landingpage',
    component: LandingPageComponent
  },
  {
    path: '',
    redirectTo: '/default',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }