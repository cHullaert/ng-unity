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
  public messages: Observable<IMessage>;

  constructor() { }

  ngOnInit() {
    this.messages = Observable.fromEvent(window, this.eventType.toString());
  }

  public load(componentId: string, buildJson: string = './assets/build.json') {
    window[this.loaderGlobalVariable.toString()] = UnityLoader;
    this.gameInstance = UnityLoader.instantiate(componentId, buildJson);
  }

  public registerFlow(observable: Observable<IMessage>) {
    observable.subscribe(message => {
      this.gameInstance.SendMessage(this.messageHandler, this.messageMethod, JSON.stringify(message));
    },
      error => {
        console.log('error on message: ' + error);
      },
      () => {
        console.log('on complete');
      });

  }
}
