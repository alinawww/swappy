import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSelect,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatDividerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSelectModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatDividerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
