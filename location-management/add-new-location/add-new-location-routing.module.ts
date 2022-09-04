import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewLocationPage } from './add-new-location.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewLocationPageRoutingModule {}
