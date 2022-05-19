import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { DealComponent } from './deal/deal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import 'ag-grid-enterprise';
import { DealService } from './services/deal.service';
import { AddDealComponent } from './deal/add-deal/add-deal.component';
import { fromEventPattern } from 'rxjs';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DealComponent,
    AddDealComponent
  ],
  imports: [BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule, 
    AgGridModule.withComponents([]), 
    AppRoutingModule],
  providers: [DealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
