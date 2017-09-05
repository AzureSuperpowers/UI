import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SettingService } from '../setting/setting.service';
import { Employee } from '../../models/employee';
import { Customer } from '../../models/customer';
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
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get(`${this.settingService.settings[this.endPoint].endPointUrl}`, )
      .map((response: Response) => response.json());
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