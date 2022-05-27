import { Injectable } from '@angular/core';

import { DealSsrmComponent } from '../deal-ssrm/deal-ssrm.component';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  

import { MessageService } from '../message.service';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DealSSRM } from '../dealSSRM';

@Injectable({
  providedIn: 'root'
})
export class DealSSRMService {
  apiUrl: string = "http://localhost:82/CreditHoldRelease.asmx/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) { }

  //http://localhost/Api/Deals/GetDealDetails
  /*getDeals(): Observable < DealSsrmComponent[] > {  
      return this.http.get < DealSsrmComponent[] > (`${this.apiUrl}getAllDealsSSRM2`);  
  }*/

  public getDeals(postData: any): Observable<DealSSRM> {
    return this.http.post<DealSSRM>(this.apiUrl + 'getAllDealsSSRM2', JSON.stringify(postData), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }
    // Error handling 
    handleError(error: { error: { message: string; }; status: any; message: any; }) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
      } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
  }

}
