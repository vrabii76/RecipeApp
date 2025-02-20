import { NgModule } from '@angular/core';

import { AuthCompoent } from './auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DataStorageService } from '../shared/data-storage.service';

@NgModule({
  declarations: [AuthCompoent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AuthCompoent }]),
    SharedModule,
  ],
  providers: [DataStorageService],
})
export class AuthModule {}
