import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Setting } from '../../models/setting';

@Injectable()
export class SettingService {

  private settingKey: string = 'nwt_settings';
  setting: Setting = <Setting>{};
  settingChange = new BehaviorSubject<Setting>(null);

  constructor() {
    let setting = <Setting>JSON.parse(localStorage.getItem(this.settingKey));
    if (setting) this.setSetting(setting);
  }

  setSetting(setting: Setting) {
    this.setting = setting;
    if (this.setting == null) {
      localStorage.removeItem(this.settingKey);
    } else {
      localStorage.setItem(this.settingKey, JSON.stringify(setting));
    }
    this.settingChange.next(this.setting);
  }

  setEndPoint(endPoint: string) {
    this.setting.endPointUrl = endPoint;
    this.setSetting(this.setting);
  }

  setHeader(key: string, value: string) {
    let result = this.setting.headers.filter((h: any) => { return h.key == key });
    let header: any = { key: key, value: value };
    if (result.length > 0) {
      header = result[0];
      //delete
      if (!!!value) {
        let index = this.setting.headers.indexOf(header);
        this.setting.headers.splice(index, 1);
      } else {
        header.key = key;
        header.value = value;
      }
    } else {
      this.setting.headers.push(header);
    }
    this.setSetting(this.setting);
  }
}
