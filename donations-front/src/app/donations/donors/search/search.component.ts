import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sco-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() categories: Array<string>;
  search = {
    minValue: undefined,
    maxValue: undefined,
    categories: ""
  }
  @Output() searchChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateSearch() {
    let searchParams = {
      minValue: "",
      maxValue: "",
      categories: []
    }
    if (this.search.categories == "") {
      searchParams.categories = undefined;
    } else if (this.search.categories.includes(",")) {
      let split: string[] = this.search.categories.split(",")
      split.forEach(elem => searchParams.categories.push(elem));
    } else {
      searchParams.categories.push(this.search.categories);
    }
    if (this.search.minValue == undefined) {
      searchParams.minValue = "";
    } else {
      searchParams.minValue = String(this.search.minValue);
    }
    if (this.search.maxValue == undefined) {
      searchParams.maxValue = "";
    } else {
      searchParams.maxValue = String(this.search.maxValue);
    }
    this.searchChanged.emit(searchParams);
  }

}
