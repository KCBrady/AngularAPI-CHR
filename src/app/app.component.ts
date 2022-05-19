import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //@ViewChild("agGrid",{ static: false}) agGrid!:AgGridAngular;
  title = 'AngularAPI';

  /*columnDefs = [
    { headerName: "Country", field: "country", rowGroup: true },
    { headerName: "Name", field: "name", sortable: true, filter: true, checkboxSelection: true},
    { headerName: "Web", field: "web_pages", sortable: true, filter: true}
  ];

  autoGroupColumnDef = {
    headerName: 'Country',
    field: 'country',
    callRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  }

  rowData: any;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    //this.rowData = this.http.get("https://api.myjson.com/bins/15psn9");
    this.rowData = this.http.get("http://universities.hipolabs.com/search?country=");
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectDataStringPresentation = selectedData.map(node => node.name + ' ' + node.web_pages).join(", ");
    alert(selectDataStringPresentation);
  }*/

}
