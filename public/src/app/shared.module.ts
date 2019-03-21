import { NgModule } from '@angular/core';
import { PaginationComponent } from './core/components/pagination/pagination.component';

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
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatChipsModule,
    MatButtonToggleModule,
  ],
  declarations: [PaginationComponent],
  exports: [
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatChipsModule,
    MatButtonToggleModule,
    PaginationComponent
  ]
})
export class SharedModule { }
