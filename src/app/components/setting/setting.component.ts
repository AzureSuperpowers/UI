import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(
    private settingService: SettingService
  ) { }

  ngOnInit() {
  }

}
