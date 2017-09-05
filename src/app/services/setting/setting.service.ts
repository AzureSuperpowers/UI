import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Setting } from '../../models/setting';

@Injectable()
export class SettingService {

  private settingKey: string = 'nwt_settings';
  settings: {};
  settingChange = new BehaviorSubject<any>(null);

  constructor() {
    let settings = JSON.parse(localStorage.getItem(this.settingKey));
    console.log(settings);
    if (settings) this.setSetting(settings);
  }

  setSetting(settings: any) {
    this.settings = settings;
    if (this.settings == null) {
      localStorage.removeItem(this.settingKey);
    } else {
      localStorage.setItem(this.settingKey, JSON.stringify(settings));
    }
    this.settingChange.next(this.settings);
  }

  setEndPoint(name: string, endPoint: string) {
    this.settings[name].endPointUrl = endPoint;
    this.setSetting(this.settings);
  }

  setHeader(name:string, key: string, value: string) {
    let result = this.settings[name].headers.filter((h: any) => { return h.key == key });
    let header: any = { key: key, value: value };
    if (result.length > 0) {
      header = result[0];
      //delete
      if (!!!value) {
        let index = this.settings[name].headers.indexOf(header);
        this.settings[name].headers.splice(index, 1);
      } else {
        header.key = key;
        header.value = value;
      }
    } else {
      this.settings[name].headers.push(header);
    }
    this.setSetting(this.settings);
  }
}
