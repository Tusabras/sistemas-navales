import { Component, OnInit } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Properties } from '../../../../../api/collections/settings.collection';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-calculator',
  templateUrl: 'calculator.component.html',
  styleUrls: []
})
export class CalculatorComponent implements OnInit {

  settings: Promise<any[]>;

  constructor (
    private zone: NgZone,
  ) {
    this.settings = this.getSettings();
   }

   ngOnInit() {}

  async getSettings() {
    const settings = await new Promise<any[]>((resolve, reject) => {
      console.log("asdfas");
      Meteor.subscribe("properties", {
        onReady: () => {
          console.log("asdfasdfaas");
          resolve(Properties.find({}).fetch());
        }
      });
    });
    
    return settings;
  }

}
