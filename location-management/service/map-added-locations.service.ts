import { Injectable } from '@angular/core';
import addedLocationModel from '../model/addedLocation.model';

@Injectable({
  providedIn: 'root'
})
export class MapAddedLocationsService {
  locationsOnTheMap:addedLocationModel[]=[];
  constructor() { }
  getLocationsOnTheMap(){
    return this.locationsOnTheMap;
  }
}
