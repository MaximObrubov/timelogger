import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormPageComponent } from './form-page/form-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    FormPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormPageComponent
  ]
})
export class FormModule { }
