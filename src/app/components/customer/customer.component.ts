import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/api/api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

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
}

