import { Donor } from './../../../model/donor.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sco-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() donors: Donor[];

  constructor() { }

  ngOnInit(): void {
  }

}
