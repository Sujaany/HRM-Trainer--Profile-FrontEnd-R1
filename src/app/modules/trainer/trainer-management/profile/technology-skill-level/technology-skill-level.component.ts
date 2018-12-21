import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-technology-skill-level',
  templateUrl: './technology-skill-level.component.html',
  styleUrls: ['./technology-skill-level.component.css']
})
export class TechnologySkillLevelComponent implements OnInit {

  displayedColumns: string[] = ['technology','skill','level','edit/delete'];

  technologySkill = [
    {'technology':'Core Technology','skill':'core Java','level':'3','edit/delete':''},
    
  ]
  dataSource = new MatTableDataSource<any>(this.technologySkill);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.technologySkill);
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

