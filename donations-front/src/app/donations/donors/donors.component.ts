import { DonationsService } from './../../services/donations.service';
import { DonorList } from './../../model/donorList.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sco-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {
  donorList: DonorList;
  parameters = {
    page: 1,
    pageSize: 6,
    filter: {
      categories: undefined,
      minValue: "",
      maxValue: ""
    }
  }
  categories: Array<string>;

  constructor(private service: DonationsService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(data => {
      this.categories = data;
      let index = this.categories.findIndex(elem => elem == "donations");
      if (index != -1) {
        this.categories[index] = "donation";
      }
    });
    this.updateDonors();
  }

  updateDonors() {
    this.service.getAll(this.parameters).subscribe(data => {
      this.donorList = data;
    });
  }

  setPage(newPage: number) {
    this.parameters.page = newPage;
    this.updateDonors();
  }

  updateSearch(searchParams: any) {
    this.parameters.filter.categories = searchParams.categories;
    this.parameters.filter.minValue = searchParams.minValue;
    this.parameters.filter.maxValue = searchParams.maxValue;
    this.updateDonors();
  }

}
