import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchByLocationPageRoutingModule } from './search-by-location-routing.module';

import { SearchByLocationPage } from './search-by-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchByLocationPageRoutingModule
  ],
  declarations: [SearchByLocationPage]
})
export class SearchByLocationPageModule {}
