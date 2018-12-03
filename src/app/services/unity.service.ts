import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

import { UnityLoader } from 'unity-loader';

export interface IMessage {
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class UnityService implements OnInit {
  private gameInstance: any;

  public messageHandler: String = 'MessageHandler';
  public messageMethod: String = 'onMessage';
  public eventType: String = 'unityEvent';
  public loaderGlobalVariable: String = 'UnityLoader';

  constructor() {}

  ngOnInit() {}

  public load(componentId: string, buildJson: string = './assets/build.json') {
    window[this.loaderGlobalVariable.toString()] = UnityLoader;
    this.gameInstance = UnityLoader.instantiate(componentId, buildJson);
  }

  public registerFlow(observable: Observable<IMessage>) {
    observable.subscribe(
      message => {
        this.gameInstance.SendMessage(
          this.messageHandler,
          this.messageMethod,
          JSON.stringify(message)
        );
      },
      error => {
        console.log('error on message: ' + error);
      },
      () => {
        console.log('on complete');
      }
    );
  }
}
