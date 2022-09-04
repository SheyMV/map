import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationManagementPageRoutingModule } from './location-management-routing.module';

import { LocationManagementPage } from './location-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationManagementPageRoutingModule
  ],
  declarations: [LocationManagementPage]
})
export class LocationManagementPageModule {}
