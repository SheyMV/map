import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent, RangeValue } from '@ionic/core';

@Component({
  selector: 'app-search-by-location',
  templateUrl: './search-by-location.page.html',
  styleUrls: ['./search-by-location.page.scss'],
})
export class SearchByLocationPage implements OnInit {
  rangeValue: RangeValue;
  km='Kilometers';
  m='Meters';
  constructor() { }

  ngOnInit() {
  }
  onIonChange(event:Event){
    this.rangeValue = (event as RangeCustomEvent).detail.value;
  }
}
