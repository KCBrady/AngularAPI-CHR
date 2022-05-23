import 'ag-grid-enterprise';

import { Actions, Select, Store, ofActionDispatched } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';

import {  
  Component,  
  OnInit,
  OnDestroy 
} from '@angular/core';  
//import { DealSSRM} from '../deal-ssrm';  
//import { ColDef, GridApi, ColumnApi, CellValueChangedEvent, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community';  
//import { DealSSRMService } from '../services/deal-ssrm.service';  
import { Router} from '@angular/router';  
import { ToastrService} from 'ngx-toastr'; 

import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-deal-ssrm',
  templateUrl: './deal-ssrm.component.html',
  styleUrls: ['./deal-ssrm.component.scss']
})
export class DealSsrmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
