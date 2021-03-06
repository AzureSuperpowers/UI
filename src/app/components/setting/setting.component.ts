import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  public settings: any = [];

  constructor(
    public settingService: SettingService
  ) { }

  ngOnInit() {
    this.settingService.settingChange.subscribe(
      item => {
        if (item && item.length > 0) {
          this.settings = item;
        }
      }
    )
  }

  save() {
    this.settingService.setSetting(this.settings);
  }
}
