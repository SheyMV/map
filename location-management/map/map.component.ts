import { Component, OnInit } from '@angular/core';
import * as L from "leaflet"

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  didPageInit=false;
  private map;
  constructor() { }

  ngOnInit() {}
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
    tiles.addTo(this.map)
  }

}
