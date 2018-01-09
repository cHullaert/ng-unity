import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';


import { UnityLoader } from 'unity-loader';

//declare let window: any;

export interface IMessage {
  type: string;
  payload: any;
}

@Injectable()
export class UnityService implements OnInit {
  private gameInstance: any;

  public messageHandler: String = 'MessageHandler';
  public messageMethod: String = 'onMessage';
  public eventType: String = 'unityEvent';
  public loaderGlobalVariable: String = 'UnityLoader';
  public buildJson: String = './assets/build.json';
  public messages: Observable<IMessage>;

  constructor() { }

  ngOnInit() {
    this.messages = Observable.fromEvent(window, this.eventType.toString());
  }

  public load(componentId: string) {
    window[this.loaderGlobalVariable.toString()] = UnityLoader;
    this.gameInstance = UnityLoader.instantiate(componentId, this.buildJson);
  }

  public registerFlow(observable: Observable<IMessage>) {
    observable.subscribe(message => {
      this.gameInstance.sendMessage(this.messageHandler, this.messageMethod, message);
    });

  }
}
