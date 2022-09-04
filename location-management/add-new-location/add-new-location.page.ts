import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as L from "leaflet"
import addedLocationModel from 'src/assets/model/addedLocation.model';
import { AddedLocationsService } from 'src/assets/service/added-locations.service';
import { MapAddedLocationsService } from 'src/assets/service/map-added-locations.service';

@Component({
  selector: 'app-add-new-location',
  templateUrl: './add-new-location.page.html',
  styleUrls: ['./add-new-location.page.scss'],
})
export class AddNewLocationPage implements OnInit ,OnDestroy{
  didPageInit=false;
  private map;
  locationForm:FormGroup;
  addedLoc:addedLocationModel[];
  markersOnTheMap:addedLocationModel[];
  latLng :number;
  lat:number;
  lng:number;
  marker:L.Marker;
  constructor(private fb :FormBuilder,private mapAddedLocations: MapAddedLocationsService ,private addedLocationsService : AddedLocationsService ) {
    this.addedLoc = this.addedLocationsService.getAddedLocation();
    this.markersOnTheMap = this.mapAddedLocations.getLocationsOnTheMap();
   
   }

  ngOnInit() {
    this.locationForm= this.fb.group({
      title: new FormControl('',Validators.required),
    })
  }
  ionViewDidEnter() {
    this.didPageInit=true;
    setTimeout(() => {
      this.initMap();

    }, 1000);
  }


  private initMap() :void{
    this.map = L.map('map').setView([35.689197, 51.388974], 15);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    })
    this.map.locate({setView: true, maxZoom: 20});
    
    tiles.addTo(this.map)
    this.map.on('click', e => {
      // console.log(e.latlng);
     this.marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
    })
  }
// 

// 

  onSubmit(data){
    this.lat = this.marker.getLatLng().lat;
    this.lng = this.marker.getLatLng().lng;
    this.addedLoc.unshift({title:data.value.title,lat:this.lat,lng:this.lng});
    // this.markersOnTheMap.unsh0({title:data.value.title,lat:this.lat,lng:this.lng});
    console.log(this.addedLoc);
    console.log(this.markersOnTheMap);
    this.locationForm.reset();
  }

  ngOnDestroy(){
    this.map.off();
  }
}
