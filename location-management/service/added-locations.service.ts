import { Injectable } from '@angular/core';
import addedLocationModel from '../model/addedLocation.model';

@Injectable({
  providedIn: 'root'
})
export class AddedLocationsService {
addedLoc:addedLocationModel[]=[]
  constructor() { }
  getAddedLocation(){
    return this.addedLoc;
  }
}
