import { UnityService } from 'src/app/services/unity.service';
import { UnityApplicationComponent } from './../../components/unity-application/unity-application.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [UnityApplicationComponent],
  exports: [UnityApplicationComponent],
  providers: [UnityService]
})
export class UnityLinkerModule {}
