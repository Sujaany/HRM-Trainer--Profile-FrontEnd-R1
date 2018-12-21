import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academic-qualification',
  templateUrl: './academic-qualification.component.html',
  styleUrls: ['./academic-qualification.component.css']
})
export class AcademicQualificationComponent implements OnInit {

  displayedColumns: string[] = ['syear', 'eyear','name', 'subject','graduation', 'grading'];

  acadamic = [
    { 'syear':'2018','eyear':'2018', 'name':'abc', 'subject':'IT' , 'graduation':'2000', 'grading':'A'},
    { 'syear':'2019','eyear':'2018', 'name':'xyz', 'subject':'IT' , 'graduation':'2000', 'grading':'B' },

   
  ]
  secounddisplayedColumns: string[] = ['secound-syear', 'secound-eyear','secound-name', 'secound-subject','secound-graduation', 'secound-grading'];

  secoundacadamic = [
    { 'secoundsyear':'2019','secoundeyear':'2020', 'secoundname':'abc', 'secoundsubject':'IT' , 'secoundgraduation':'2000', 'secoundgrading':'A'},
    { 'secoundsyear':'2019','secoundeyear':'2020', 'secoundname':'xyz', 'secoundsubject':'IT' , 'secoundgraduation':'2000', 'secoundgrading':'B' },

   
  ]
  dataSource = new MatTableDataSource<any>(this.acadamic);
  dataSource2 = new MatTableDataSource<any>(this.secoundacadamic);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private router:Router) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.acadamic);
    this.dataSource2 = new MatTableDataSource<any>(this.secoundacadamic);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  gotoNext(){
    this.router.navigate(['/profile/ProfQual'])
  }
  goBack(){
    this.router.navigate(['/profile/genInf'])
  }
}