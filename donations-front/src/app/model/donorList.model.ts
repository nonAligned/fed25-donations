import { Donor } from './donor.model';
export class DonorList {
    count: number;
    donors: Donor[];

    constructor(obj?: any) {
        this.count = obj && obj.count || null;
        if (this.count != 0) {
            this.donors = obj && obj.donors || null;
        } else {
            this.donors = [];
        }
    }
}