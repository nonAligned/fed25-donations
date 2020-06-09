import { DonationsService } from './../../services/donations.service';
import { Donor } from './../../model/donor.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sco-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  donationForm: FormGroup;
  donor: Donor;
  categories: Array<string>;
  date: {year: number, month: number}

  constructor(private fb: FormBuilder, private service: DonationsService, private ar: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(data => {
      this.categories = data;
      let index = this.categories.findIndex(elem => elem == "donations");
      if (index != -1) {
        this.categories[index] = "donation";
      }
    });
    let id: string = this.ar.snapshot.params.id;
    if (id) {
      this.service.getDonor(Number(id)).subscribe(data => {
        this.donor = data;
        let date = new Date(this.donor.charity_date);
        this.donationForm.patchValue(this.donor);
        this.donationForm.controls['charity_date'].setValue({
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDate()
        })
      });
    }
  }


  createForm() {
    this.donationForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.minLength(10)],
      charity_date: [{}, Validators.required],
      categories: ['', Validators.required],
      estimated_value: ''
    });
  }

  onSubmit() {
    let submittedDonor: Donor = new Donor(this.donationForm.value);
    let ngbDate = this.donationForm.controls['charity_date'].value;
    let myDate = new Date(ngbDate.year, ngbDate.month, ngbDate.day).toISOString();
    submittedDonor.charity_date = String(myDate);
    if (this.donor && this.donor._id) {
      submittedDonor._id = this.donor._id;
      this.service.updateDonor(submittedDonor).subscribe(data => {
        this.router.navigate(['donors']);
      });
      console.log("update");
      console.log(submittedDonor);
    } else {
      this.service.submitDonor(submittedDonor).subscribe(data => {
        this.router.navigate(['donors']);
      });
      console.log("add");
      console.log(submittedDonor);
    }
  }

}
