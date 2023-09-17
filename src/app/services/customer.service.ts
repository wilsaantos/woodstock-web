import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../shared/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${environment.hostUrl}/customer/findAll`)
  }

  public save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(`${environment.hostUrl}/customer`, customer);
  }
}
