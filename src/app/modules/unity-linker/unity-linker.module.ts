import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnityAppComponent } from '../unity-app/unity-app.component';
import { UnityService } from '../unity-service/unity-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UnityAppComponent],
  exports: [UnityAppComponent],
  providers: [UnityService]
})
export class UnityLinkerModule { }
