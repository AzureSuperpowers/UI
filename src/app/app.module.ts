import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpModule, RequestOptions } from '@angular/http';
import { MyOptions } from './my-options';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CategoryComponent } from './components/category/category.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { ProductComponent } from './components/product/product.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SettingComponent } from './components/setting/setting.component';

import { ApiService, EmployeeService, CustomerService } from './services/api/api.service';
import { SettingService } from './services/setting/setting.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FetchDataComponent,
    HomeComponent,
    CategoryComponent,
    SupplierComponent,
    ProductComponent,
    CustomerComponent,
    OrderComponent,
    EmployeeComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'supplier', component: SupplierComponent },
      { path: 'product', component: ProductComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'order', component: OrderComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'setting', component: SettingComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    ApiService,
    EmployeeService,
    CustomerService,
    SettingService,
    { provide: RequestOptions, useClass: MyOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
