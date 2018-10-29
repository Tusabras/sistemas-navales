import { Component, OnInit, OnDestroy,
         Renderer2, ElementRef, ViewChild } from '@angular/core';
import GoogleStyles from './styles/styles';
// import GoogleMap from 'google-maps';
declare let google:any;

@Component({
  selector: 'app-map',
  template: '<div id="map"></div>',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  //------------------------------------
  // Variables
  //------------------------------------

  map:object;
  center:object = { lat: 41.378842, lng: 2.182331 };

  marker:any;
  markerIcon:any = "/assets/icons/google-map/mark.png"
  charterdart:object = { lat: 41.377542, lng: 2.187331 };



  //------------------------------------
  // Initializing Goolge Maps
  //------------------------------------

  ngOnInit() {

    // // GoogleMap.load((google) => {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: this.center,
        styles: GoogleStyles,
        zoom: 16,
        fullscreenControl: false,
        zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
        },
      });

      this.marker = new google.maps.Marker({
        position: this.charterdart,
        map: this.map,
        animation: google.maps.Animation.DROP,
        title: 'Sistemas navales',
        icon: {
          url: this.markerIcon,
        }
      });
    // });

    // // GoogleMap.KEY = 'AIzaSyDzLrY6uk41zNHJrAYfc8LrL8AFHutc6J4';
  }
}
