import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { CheckboxOverviewExample } from './app.checkbox';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [CheckboxOverviewExample],
  declarations: [CheckboxOverviewExample, DatatableComponent]
})
export class MaterialModule { }