import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './form/form-page/form-page.component';
import { TimelogPageComponent } from './timelog/timelog-page/timelog-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: FormPageComponent, data: { title: 'Add' }},
  { path: 'list', component: TimelogPageComponent, data: { title: "List" }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
