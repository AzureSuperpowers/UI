import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models';
import { CustomerService } from '../../services/api/api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  selectedCustomer: Customer;
  customers: Customer[];
  constructor(
    private apiService: CustomerService
  ) {
  }

  ngOnInit() {
    this.apiService.getAll().subscribe(r => {
      this.customers = r;
    });
  }

  selectCustomer(Customer: Customer) {
    this.selectedCustomer = Customer;
  }

  save() {
    this.apiService.save(this.selectedCustomer).subscribe(r => {
      console.log(r);
      this.selectCustomer(undefined);
    });
  }
}

