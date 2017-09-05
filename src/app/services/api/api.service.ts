import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { SettingService } from '../setting/setting.service';
import { Employee, Customer, Product } from '../../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService<T> {
  protected endPoint: string;
  constructor(
    private http: Http,
    private settingService: SettingService
  ) {

  }

  setting() {
    return this.settingService.getSettings(this.endPoint);
  }

  options() {
    let headers = new Headers();
    if (this.setting().headers) {
      console.log("headers")
      this.setting().headers.forEach(h => {
        headers.append(h.key, h.value);
      });
    }
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });
    return options;
  }

  getAll(): Observable<T[]> {
    return this.http.get(`${this.setting().endPointUrl}`, this.options())
      .map((response: Response) => response.json());
  }

  save(model: T): Observable<Response> {
    return this.http.post(`${this.setting().endPointUrl}`, model, this.options());
  }
}

@Injectable()
export class EmployeeService extends ApiService<Employee>
{
  constructor(private _http: Http,
    private _settingService: SettingService
  ) {
    super(_http, _settingService);
    this.endPoint = "employee";
  }
}

@Injectable()
export class CustomerService extends ApiService<Customer>
{
  constructor(private _http: Http,
    private _settingService: SettingService
  ) {
    super(_http, _settingService);
    this.endPoint = "customer";
  }
}

@Injectable()
export class ProductService extends ApiService<Product>
{
  constructor(private _http: Http,
    private _settingService: SettingService
  ) {
    super(_http, _settingService);
    this.endPoint = "product";
  }
}