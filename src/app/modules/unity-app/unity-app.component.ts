import { Component, OnInit } from '@angular/core';

import { UnityLoader } from './UnityLoader.js';
declare let window: any;

@Component({
  selector: 'unity-app',
  templateUrl: './unity-app.component.html',
  styleUrls: ['./unity-app.component.css']
})
export class UnityAppComponent implements OnInit {
  private gameInstance: any;

  constructor() { 
  }

  ngOnInit() {
    window.UnityLoader = UnityLoader;
    this.gameInstance = UnityLoader.instantiate("gameContainer", "./assets/build.json");
  }

}
