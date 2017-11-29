import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

import { loader } from './UnityLoader';

declare let window: any;

@Injectable()
export class UnityService implements OnInit {
  private gameInstance: any;
    
  constructor() { }

  ngOnInit() {
  }

  public load(componentId: string) {
    window.UnityLoader = loader();
    this.gameInstance = loader().instantiate(componentId, "./assets/build.json");
  }

  public sendMessage(messageHandler: string, message: any) {
    this.gameInstance.SendMessage(messageHandler, message.type, JSON.stringify(message.payload));
  }

}
