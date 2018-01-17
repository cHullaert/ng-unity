import { Component, OnInit, Input } from '@angular/core';

import { UnityService } from '../unity-service/unity-service.service';

@Component({
  selector: 'app-unity',
  templateUrl: './unity-app.component.html',
  styleUrls: ['./unity-app.component.css']
})
export class UnityAppComponent implements OnInit {
  @Input('src') src = './assets/build.json';

  constructor(private _unityService: UnityService) {
  }

  ngOnInit() {
    this._unityService.load('gamecontainer', this.src);
  }

}
