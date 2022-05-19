import { Injectable } from '@angular/core';

import { Deal } from '../deal';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealService {
  apiUrl: string = "http://localhost:80/Api/Deals/";
  constructor( private http: HttpClient ) { }

  editDeal(deal: Deal) {  
    return this.http.put(this.apiUrl + 'UpdateEmployeeDetails/', deal);  
  }  
  //http://localhost/Api/Deals/GetDealDetails
  getDeals(): Observable < Deal[] > {  
      return this.http.get < Deal[] > (`${this.apiUrl}GetDealDetails`);  
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



}
