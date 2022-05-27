import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealComponent } from './deal/deal.component';
import { AddDealComponent } from './deal/add-deal/add-deal.component';
import { DealSsrmComponent } from './deal-ssrm/deal-ssrm.component';


const routes: Routes = [
  {path:'deals',  component:DealComponent},
  {path:'', component:DealComponent},
  {path:'addDeal', component:AddDealComponent},
  {path:'ssrm', component:DealSsrmComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }