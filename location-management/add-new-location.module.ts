import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewLocationPageRoutingModule } from './add-new-location-routing.module';

import { AddNewLocationPage } from './add-new-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewLocationPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [AddNewLocationPage]
})
export class AddNewLocationPageModule {}
