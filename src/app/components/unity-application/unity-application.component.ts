import { Component, OnInit, Input } from '@angular/core';
import { UnityService } from 'src/app/services/unity.service';

@Component({
  selector: 'app-unity-application',
  templateUrl: './unity-application.component.html',
  styleUrls: ['./unity-application.component.scss']
})
export class UnityApplicationComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('src') src = './assets/build.json';

  constructor(private _unityService: UnityService) {}

  ngOnInit() {
    this._unityService.load('gamecontainer', this.src);
  }
}
