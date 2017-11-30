import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

import { UnityLoader } from 'unity-loader';

declare let window: any;

class UnityMethod {
  constructor(public name: string) {
  }
}

interface IDictionary {
  [index: string]: UnityMethod;
}

interface IMessage {
  type: string;
  payload: any;
}

@Injectable()
export class UnityService implements OnInit {
  private gameInstance: any;
  private senders: IDictionary = {};
    
  constructor() { }

  ngOnInit() {
  }

  public load(componentId: string) {
    window.UnityLoader = UnityLoader;
    this.gameInstance = UnityLoader.instantiate(componentId, "./assets/build.json");
  }

  public sendMessage(gameObject: string, message: IMessage) {
    let method=this.senders[message.type] as UnityMethod;
    if(method) 
      this.gameInstance.SendMessage(gameObject, method.name, JSON.stringify(message.payload));    
  }

  public registerMessageSender(messageKey: string, unityMethod: UnityMethod) {
    this.senders[messageKey]=unityMethod;
  }

}
