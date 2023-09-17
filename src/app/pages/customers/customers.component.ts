import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource();
  displayedColumns: string[] = [
    'name',
    'email',
    'phoneNumber',
    'documentNumber',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.findCustomers();
  }

  findCustomers(): void {
    this.customerService.findAll().subscribe({
      next: (customers) => {
        console.log(customers);
        this.dataSource = new MatTableDataSource(customers);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
