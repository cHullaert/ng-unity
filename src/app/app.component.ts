import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UnityService, IMessage } from './modules/unity-service/unity-service.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageInput = '';
  title = 'unity-tester';

  constructor(private _unityService: UnityService,
    private _http: HttpClient) {

  }

  private loadMessage(file: String): Observable<IMessage> {
    return this._http.get('./assets/data/' + file)
      .map((res: any) => res as IMessage);
  }

  sendMessage() {
    this._unityService.registerFlow(Observable.of({ payload: JSON.parse(this.messageInput) } as IMessage));
  }
}
