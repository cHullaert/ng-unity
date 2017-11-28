import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnityAppComponent } from '../unity-app/unity-app.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UnityAppComponent],
  exports: [UnityAppComponent] 
})
export class UnityLinkerModule { }
