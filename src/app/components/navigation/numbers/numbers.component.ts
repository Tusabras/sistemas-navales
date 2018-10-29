import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})

export class NumbersComponent implements OnInit {

  constructor(private router: Router) {}

  componentState  = {
    visible: true,
    inverted: false,
    continue: false
  };

  currentRoute = '';

  ngOnInit() {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.restyleNumbers()
      }
    });
  }

  restyleNumbers() {
    const white = ['/discover', '/vr-experience'],
          black = ['/about', '/contact'],
          continueNavigation = ['/vr-experience/thank-you', '/vr-experience/enquire', '/vr-experience/appointment', '/vr-experience/confirmation'],
          currentRoute = this.currentRoute,
          checkRoute = (element) => { return element == currentRoute };

    if (currentRoute == '/discover') {
      this.componentState = {inverted: false, visible: false, continue: false};
    } else if (continueNavigation.some(checkRoute)) {
      this.componentState = { inverted: false,visible: false, continue: true};
    } else if (white.some(checkRoute)) {
      this.componentState = {inverted: false,visible: true, continue: false};
    } else if (black.some(checkRoute)) {
      this.componentState = {inverted: true,visible: true, continue: false};
    }
  }
}
