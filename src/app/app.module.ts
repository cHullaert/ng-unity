import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnityApplicationComponent } from './components/unity-application/unity-application.component';

@NgModule({
  declarations: [
    AppComponent,
    UnityApplicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
