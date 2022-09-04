import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  didPageInitiolized=false;
  private map;
  constructor() { }

  ngOnInit() {
    
  }
  ionViewDidEnter() {
    this.didPageInitiolized=true;
    setTimeout(() => {
      this.initMap();
    }, 1000);  }

  private initMap(): void {
    this.map = L.map('map').setView([35.689167, 51.388889], 15);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'

    })
    tiles.addTo(this.map)
  }

}
