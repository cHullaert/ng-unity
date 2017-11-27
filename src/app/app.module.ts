import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UnityLinkerModule } from './modules/unity-linker/unity-linker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UnityLinkerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
