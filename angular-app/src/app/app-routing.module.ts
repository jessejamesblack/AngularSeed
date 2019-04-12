import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
  {
    path: 'default',
    component: DefaultComponent
  },
  {
    path: 'accountdetails',
    component: AccountDetailsComponent
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
