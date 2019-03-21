import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';

import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatButtonToggleModule
} from '@angular/material';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [UserComponent, UsersComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class UsersModule { }
