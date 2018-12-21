import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-record-of-employeement',
  templateUrl: './record-of-employeement.component.html',
  styleUrls: ['./record-of-employeement.component.css']
})
export class RecordOfEmployeementComponent implements OnInit {
  displayedColumns: string[] = ['from','to','period','workPlaceName','workPlaceAddres','designation','typeOfWork','edit/delete'];

  recordOfEmployment = [
    {'from':'25.10.2016','to':'25.10.2018','period':'02 years','workPlaceName':'SGIC','workPlaceAddres':'Jaffna','designation':'HR','typeOfWork':'Office','edit/delete':''},
    
  ]
  dataSource = new MatTableDataSource<any>(this.recordOfEmployment);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.recordOfEmployment);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
