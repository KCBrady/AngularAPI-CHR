import 'ag-grid-enterprise';

import { Actions, Select, Store, ofActionDispatched } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';

import {  
  Component,  
  OnInit,
  OnDestroy 
} from '@angular/core';  
import { Deal} from '../deal';  

import { ColDef, GridApi, ColumnApi, CellValueChangedEvent, GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community';  
import { DealService } from '../services/deal.service';  
import { Router} from '@angular/router';  
import { ToastrService} from 'ngx-toastr'; 

import { filter, take } from 'rxjs/operators';

import { GridChartsModule } from "@ag-grid-enterprise/charts";
 
@Component({  
  selector: 'app-deal',  
  templateUrl: './deal.component.html',  
  styleUrls: ['./deal.component.scss']  
})  



export class DealComponent implements OnInit {  
  // row data and column definitions  
  // row data and column definitions  
  public deals!: Deal[];  
  public columnDefs: ColDef[];  
  // gridApi and columnApi  
  private api!: GridApi;  
  private columnApi!: ColumnApi;  
  public rowModelType: any;
  public serverSideStoreType: any;
  public paginationPageSize: any;
  public pagination: any;
  public autoGroupColumnDef: any;


  constructor(private dealService: DealService, private router: Router, private toastr: ToastrService) 
  { 
    this.columnDefs = this.createColumnDefs();  
    this.serverSideStoreType = 'partial';

    this.autoGroupColumnDef = {
      headerName: 'Group',
      minWidth: 250,
      field: 'counterparty',
      filter: 'agSetColumnFilter',
      filterParams: {
        values: (params: { colDef: { field: any; }; success: (arg0: any) => any; }) => {
          const field = params.colDef.field;
          this.dealService.getValues(field).subscribe(values => params.success(values));
        }
      }
    }
    const gridOptions = {
      statusBar: {
          statusPanels: [
              {
                  statusPanel: 'agTotalAndFilteredRowCountComponent',
                  align: 'left',
              }
          ]
      },
  
      // other grid options ...
  }

  } 

  ngOnInit(): void {
      this.dealService.getDeals().subscribe(data => {  
        this.deals = data
      })
    }

      // one grid initialisation, grap the APIs and auto resize the columns to fit the available space  
      onGridReady(params: { api: GridApi; columnApi: ColumnApi; }): void {  
          this.api = params.api;  
          this.columnApi = params.columnApi;  
          this.api.sizeColumnsToFit(); 
          
          console.log(params.api.getModel().isRowsToRender);

          params.api.addEventListener('firstDataRendered', () => {
            // On the firstDataRendered event rows will now be available
            console.log(params.api.getModel().isRowsToRender);
        });
      }
      
      // create column definitions  
      private createColumnDefs() {  
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
      status: any;  
      //Update deal  
      editDeal() {  
          debugger;  
          const d = this.api.getEditingCells();  
          if (this.api.getSelectedRows().length == 0) {  
              this.toastr.error("error", "Please select a Deal for update");  
              return;  
          }  
          var row = this.api.getSelectedRows();  
          this.dealService.updateDeal(row[0]).subscribe(data => {  
              this.toastr.success("success", data);  
              this.ngOnInit();  
          });  
      }  
      //Delete user  
      deleteDeal() {  
          debugger;  
          var selectedRows = this.api.getSelectedRows();  
          if (selectedRows.length == 0) {  
              this.toastr.error("error", "Please select a Deal for deletion");  
              return;  
          }  
          this.dealService.deleteDeal(selectedRows[0].UserId).subscribe(data => {  
              this.toastr.success("success", data);  
              this.ngOnInit();  
              this.api.refreshCells();  
          });  
      }  
      Add() {  
          this.router.navigate(['addDeal']);  
      } 
}