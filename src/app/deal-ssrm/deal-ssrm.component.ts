import 'ag-grid-enterprise';

import { Actions, Select, Store, ofActionDispatched } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';  
import { DealSSRM } from '../dealSSRM' 
import { DealSSRMService } from '../services/deal-ssrm.service'
import { FacadeService } from '../services/facade.service';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/all-modules';

import { ColDef, GridApi, ColumnApi, CellValueChangedEvent, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community';  
 
import { Router} from '@angular/router';  
import { ToastrService} from 'ngx-toastr'; 

import { filter, take } from 'rxjs/operators';

import { Module } from '@ag-grid-community/core';

@Component({
  selector: 'app-deal-ssrm',
  templateUrl: './deal-ssrm.component.html',
  styleUrls: ['./deal-ssrm.component.scss']
})
export class DealSsrmComponent implements OnInit {
  // row data and column definitions  
    // row data and column definitions  
    public dealsList!: Array<DealSSRM>;
    // row data and column definitions  
    public dealsSSRM!: any;  
    public columnDefs: ColDef[];  
    // gridApi and columnApi  
    // gridApi and columnApi  
  private api!: GridApi;  
    private columnApi!: ColumnApi; 
    
    modules: Module[] = [ServerSideRowModelModule]

    public rowModelType;
    public rowData: never[];
    public serverSideStoreType: any;
    public paginationPageSize: any;
    public pagination: any;
    public autoGroupColumnDef: any;
    public cacheBlockSize;
    facadeService: FacadeService | any;
    //public postData: any;


  constructor(private dealSSRMService: DealSSRMService, private router: Router, private toastr: ToastrService) 
  {
    this.columnDefs = this.createColumnDefs();  
    this.serverSideStoreType = 'partial';
    this.rowModelType = 'serverSide';
    this.cacheBlockSize = 10;
    this.rowData = [];
    this.autoGroupColumnDef = {
      headerName: 'Group',
      minWidth: 250,
      field: 'CounterpartyName',
      filter: 'agSetColumnFilter',
      filterParams: {
        values: (params: { colDef: { field: any; }; success: (arg0: any) => any; }) => {
          const field = params.colDef.field;
          this.dealSSRMService.getDeals(field).subscribe(values => params.success(values));
        }
      }
    }
   }

   ngOnInit(): void {
    this.dealSSRMService.getDeals(postData).subscribe(data => { this.dealsSSRM = data })
  }

   // one grid initialisation, grap the APIs and auto resize the columns to fit the available space  
    onGridReady(params: { api: GridApi; columnApi: ColumnApi; }): void {  
      this.api = params.api;  
      this.columnApi = params.columnApi;  
      this.api.sizeColumnsToFit(); 
      
      var datasource = this.createServerSideDatasource(this.facadeService);
      params.api.setServerSideDatasource(datasource);

    }

    public createServerSideDatasource(facadeService: FacadeService) {
      return {
        getRows: function (params: { request: {startRow: any; endRow: any; rowGroupCols: any; valueCols: any; groupKeys: any; sortModel: any; filterModel: any; }; successCallback: (arg0: any, arg1: any) => void; }) {
          setTimeout( () => {
            let postData = {
              "startIndex": params.request.startRow,
              "pageSize": params.request.endRow,
              "totalRecords": 0,
              "filterFormId": "string",
              "gridContainerId": "string",
              "gridPageIndex": 0,
              "searchKeyword": "string",
              "rowGroupCols": params.request.rowGroupCols,
              "valueCols": params.request.valueCols,
              "groupKeys": params.request.groupKeys,
              "sortModel": params.request.sortModel,
              "filterModel": params.request.filterModel,
              "dealsGridFilterListItem": [{
                  "CounterpartyName": "string",
              }]
            };
            console.log('[Datasource] - rows requested by grid: startRow = ' + params.request.startRow + ', endRow = ' + params.request.endRow);
            facadeService.getDeals(postData).subscribe((data: any) => {
              this.getRows = data.dealsGridFilterListItem;
              params.successCallback(this.getRows, data.totalRecords);
            });
          }, 500);
        }
      }
      
    }

  // create column definitions  
    private createColumnDefs() 
    {  
      return [{  
          headerName: 'Deal No',  
          field: 'DealId',  
          filter: true,  
          enableSorting: true,  
          editable: false,  
          sortable: true  
      }, {  
          headerName: 'Counterparty',  
          field: 'CounterpartyName',  
          filter: true,  
          editable: false,  
          sortable: true  
      }, {  
          headerName: 'Deal Number',  
          field: 'DealNumber',  
          filter: true,  
          sortable: true,  
          editable: false  
      }, {  
          headerName: 'Est Move Date',  
          field: 'EstimatedMoveDate',  
          filter: true,  
          editable: false,  
          sortable: true  
      }, {  
          headerName: 'Allocated Vol',  
          field: 'AllocationVolume',  
          filter: true,  
          editable: false,
          sortable: true
      }, {  
          headerName: 'Commodity',  
          field: 'Commodity',  
          filter: true,  
          editable: false,
          sortable: true
        }, {  
          headerName: 'Notional',  
          field: 'NotionalAmount',  
          filter: true,  
          editable: false,
          sortable: true
        }, {  
          headerName: 'Business Unit',  
          field: 'BusinessUnit',  
          filter: true,  
          editable: false,
          sortable: true
        }, {  
          headerName: 'Credit Analyst',  
          field: 'CreditAnalyst',  
          filter: true,  
          editable: false,
          sortable: true
        }, {  
          headerName: 'Status',  
          field: 'DealStatus',  
          filter: true,  
          editable: true,
          sortable: true
        }]  
      } 
}
function postData(postData: any) {
  throw new Error('Function not implemented.');
}

