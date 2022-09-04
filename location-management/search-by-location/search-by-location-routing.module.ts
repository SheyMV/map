import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchByLocationPage } from './search-by-location.page';

const routes: Routes = [
  {
    path: '',
    component: SearchByLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchByLocationPageRoutingModule {}
