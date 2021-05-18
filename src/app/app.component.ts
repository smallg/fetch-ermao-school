import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data = '';
  displayedColumns: string[] = ['schoolCode', 'schoolName', 'address', 'phoneNum', 'planCount', 'enrollCount', 'overage', 'percent'];
  dataSource = null;

  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit() {
    console.log('fk');
  }

  generate(data) {
    console.log(typeof data);
    let result = JSON.parse(data)
    result.data.list.map(temp =>{
      temp.overage = temp.enrollCount - temp.planCount;
      temp.percent = ((temp.planCount / temp.enrollCount) * 100).toFixed(2);
    })
    console.log(result.data.list)
    let tempResult = result.data.list.sort((a, b) => b.overage - a.overage);
    this.dataSource = new MatTableDataSource(tempResult);
    this.dataSource.sort = this.sort;
  }
}
