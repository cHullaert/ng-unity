import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

import { UnityLoader } from './UnityLoader';

declare let window: any;

@Injectable()
export class UnityService implements OnInit {
  private gameInstance: any;
    
  constructor() { }

  ngOnInit() {
  }

  public load(componentId: string) {
    window.UnityLoader = UnityLoader;
    this.gameInstance = UnityLoader.instantiate("gamecontainer", "./assets/build.json");
  }

}
