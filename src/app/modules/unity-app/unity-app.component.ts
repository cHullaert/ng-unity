import { Component, OnInit } from '@angular/core';

import { UnityService } from '../unity-service/unity-service.service';

@Component({
  selector: 'unity-app',
  templateUrl: './unity-app.component.html',
  styleUrls: ['./unity-app.component.css']
})
export class UnityAppComponent implements OnInit {
  constructor(private _unityService: UnityService) { 
  }

  ngOnInit() {
    this._unityService.load("gamecontainer");
  }

}
