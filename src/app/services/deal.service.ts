import { Injectable } from '@angular/core';

import { Deal } from '../deal';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  

import { MessageService } from '../message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealService {
  apiUrl: string = "http://localhost:80/Api/Deals/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    MessageService: any;

  constructor( private http: HttpClient ) { }

  editDeal(deal: Deal) {  
    return this.http.put(this.apiUrl + 'UpdateDealDetails/', deal);  
  }  

  //http://localhost/Api/Deals/GetDealDetails
  getDeals(): Observable < Deal[] > {  
      return this.http.get < Deal[] > (`${this.apiUrl}GetDealDetails`);  
  }
  
  // fop filtering
  getValues(field: string): Observable<any> {
    const setFilterUrl = this.apiUrl + '/' + field;
    console.log(setFilterUrl)
    return this.http.get(setFilterUrl, this.httpOptions).pipe(
      tap(_ => this.log('fetched set filter values')),
      catchError(this.handleError<any>('getValues', []))
    );
  }

  addDeal(deal: Deal): Observable < string > {  
      const httpOptions = {  
          headers: new HttpHeaders({  
              'Content-Type': 'application/json'  
          })  
      };  
      return this.http.post < string > (`${this.apiUrl}/InsertDealDetails/`, deal, httpOptions);  
  }  
  updateDeal(deal: Deal): Observable < string > {  
      const httpOptions = {  
          headers: new HttpHeaders({  
              'Content-Type': 'application/json'  
          })  
      };  
      return this.http.put < string > (`${this.apiUrl}/UpdateDealDetails/`, deal, httpOptions);  
  }  
  deleteDeal(dealId: string): Observable < string > {  
      const httpOptions = {  
          headers: new HttpHeaders({  
              'Content-Type': 'application/json'  
          })  
      };  
      return this.http.delete < string > (`${this.apiUrl}/DeleteDealDetails?id=` + dealId, httpOptions);  
  }  

/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
 private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message)
    this.MessageService.add(`HeroService: ${message}`);
  }

}
