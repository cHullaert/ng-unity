import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';


import { UnityLoader } from 'unity-loader';

//declare let window: any;

interface IMessage {
  type: string;
  payload: any;
}

@Injectable()
export class UnityService implements OnInit {
  private gameInstance: any;

  public messageHandler: string="MessageHandler";
  public messageMethod: string="onMessage";
  public eventType: string="unityEvent";
  public loaderGlobalVariable: string="UnityLoader";
  public buildJson: string="./assets/build.json";
  public messages: Observable<IMessage>;

  constructor() { }

  ngOnInit() {
    window[this.loaderGlobalVariable] = UnityLoader;
    this.messages=Observable.fromEvent(window, this.eventType);
  }

  public load(componentId: string) {
    this.gameInstance = UnityLoader.instantiate(componentId, this.buildJson);
  }

  public subscribe() {

  }

  public registerFlow(observable: Observable<IMessage>) {
    observable.subscribe( message => {
      this.gameInstance.sendMessage(this.messageHandler, this.messageMethod, message);
    });

  }
}
