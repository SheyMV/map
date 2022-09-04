import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationManagementPage } from './location-management.page';

const routes: Routes = [
  {
    path: '',
    component: LocationManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationManagementPageRoutingModule {}
