import { Component, OnInit } from '@angular/core';
import addedLocationModel from 'src/assets/model/addedLocation.model';
import { AddedLocationsService } from 'src/assets/service/added-locations.service';

@Component({
  selector: 'app-location-management',
  templateUrl: './location-management.page.html',
  styleUrls: ['./location-management.page.scss'],
})
export class LocationManagementPage implements OnInit {
  addedLocArray:addedLocationModel[];
  constructor(private addedLocationsService:AddedLocationsService) {
    this.addedLocArray = this.addedLocationsService.getAddedLocation();
  }

  ngOnInit() {
  }
  deleteLocation(locationLat:number,locationLng:number){
    console.log(locationLat);
    this.addedLocArray= this.addedLocArray.filter(location=> location.lat != locationLat || location.lng != locationLng);
    console.log(this.addedLocArray);
    
  }
}
