import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { SettingService } from './services/setting/setting.service';

@Injectable()
export class MyOptions extends RequestOptions {

  constructor(
    private settingService: SettingService
  ) {
    super();
    settingService.settingChange.subscribe(
      item => {
        this.setHeader();
      }
    )
  }

  setHeader() {
    this.headers = new Headers();
    this.settingService.setting.headers.forEach(h => {
      this.headers.append(h.key, h.value);
    });
  }
}