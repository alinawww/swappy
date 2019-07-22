// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: [],
  exports: [MaterialModule, CommonModule]
})
export class SharedModule {}
