import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

import { UnityLoader } from 'unity-loader';

declare let window: any;

@Injectable()
export class UnityService implements OnInit {
  private gameInstance: any;
    
  constructor() { }

  ngOnInit() {
  }

  public load(componentId: string) {
    window.UnityLoader = UnityLoader;
    this.gameInstance = UnityLoader.instantiate(componentId, "./assets/build.json");
  }

  public sendMessage(messageHandler: string, message: any) {
    this.gameInstance.SendMessage(messageHandler, message.type, JSON.stringify(message.payload));
  }

}
