import { Donor } from './../model/donor.model';
import { DonorList } from './../model/donorList.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL: string = "http://localhost:3000/api/donors";
const URL_CATEGORIES: string = "http://localhost:3000/api/categories";

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  constructor(private http: HttpClient) { }

  getAll(parameters?: any): Observable<DonorList> {
    let queryParams = {}
    if (parameters) {
      queryParams = {
        params: new HttpParams()
        .set("page", parameters.page && parameters.page.toString() || "")
        .set("pageSize", parameters.pageSize && parameters.pageSize.toString() || "")
        .set("filter", parameters.filter && JSON.stringify(parameters.filter) || "")
      }
    }
    return this.http.get(URL, queryParams).pipe(map(data => {
      return new DonorList(data);
    }));
  }

  getCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(URL_CATEGORIES).pipe(map(data => {
      let retVal = new Array<string>();
      data.forEach(elem => retVal.push(elem));
      return retVal;
    }));
  }

  submitDonor(newDonor: Donor): Observable<Donor> {
    return this.http.post(URL, newDonor).pipe(map(data => {
      return new Donor(data);
    }));
  }

  updateDonor(updatedDonor: Donor): Observable<Donor> {
    return this.http.put(URL + "/" + updatedDonor._id, updatedDonor).pipe(map(data => {
      return new Donor(data);
    }));
  }

  getDonor(id: number): Observable<Donor> {
    return this.http.get(URL + "/" + id).pipe(map( data => {
      return new Donor(data);
    }));
  }
}
