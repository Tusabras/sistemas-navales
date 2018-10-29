import { Inject, Component, AfterViewInit, OnInit, OnDestroy,
         Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {Headroom} from './headroom-modified';
/// <reference path="./types/headroom.d.ts" />
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
     

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})

  export class LinksComponent implements AfterViewInit, OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, private renderer: Renderer2) {}

    


  //------------------------------------
  // Comoponent State
  //------------------------------------

  componentState  = {
    mobileView: false,
    linksVisible: true,

    compassVisible: false,
    compassInverted: false,

    contact: false,
    about: false,
  };

  routeState = {
    changed: true
  };



  //------------------------------------
  // Variables
  //------------------------------------

  @ViewChild('container') container: ElementRef;
  containerClasses;

  @ViewChild('links') links: ElementRef;
  linksClasses;

  currentRoute = '';



  ngOnInit() {

    // Capture Navigation classList
    this.containerClasses = this.container.nativeElement.classList;
    this.linksClasses = this.links.nativeElement.classList;

    // if (isPlatformBrowser(this.platformId)) {
    //   this.window = window;
    // }


    //------------------------------------
    // Restyling on route change
    //------------------------------------

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.technicalRestyle();
      }
    });


    //------------------------------------
    // Restyling on window's width change
    //------------------------------------
    if (typeof(document) === 'object') {
      
      let resizeListener = this.renderer.listen('window', 'resize', () => {
        if (window.innerWidth >= 599) {
          this.technicalRestyle();
        }
      });
    }
  }



  ngAfterViewInit() {

    //------------------------------------
    // Implememting Headroom.js
    //------------------------------------

    console.log("com", typeof(document));
    // if (typeof(document) === 'object') {

      let navigationComponent = new Headroom(this.container.nativeElement, {
        offset: this.generateOffset(),
        tolerance: 1,
        classes : {
          // when element is initialised
          initial : "initial",
          // when scrolling up
          pinned : "visible",
          // when scrolling down
          unpinned : "hidden",
          // when above offset
          top : "top",
          // when below offset
          notTop : "scrolling",
          // when at bottom of scoll area
          bottom : "bottom",
          // when not at bottom of scroll area
          notBottom : "not-bottom"
        },
        onTop: () => {
          navigationComponent.offset = this.generateOffset()
          // generateOffset(navigationComponent.offset);
          // console.log(1)
        },
        onNotTop: () => {
          navigationComponent.offset = 0;
        }
      });

      let originalState = navigationComponent.tolerance;
      let classList = navigationComponent.elem.classList;

      navigationComponent.init();
  }


  mouseover(){
    if (typeof(document) === 'object') {
      window.innerWidth > 899 ? this.interactionRestyle.On() : null
    }
  }
  //----------------------------------------------------------
  // Updating Headroom offset
  //----------------------------------------------------------

  generateOffset() {

    let customwindow;

    if (typeof(document) === 'object') {
     customwindow = window;
    }
    else {
      customwindow = {
       innerHeight:0
       }
     }
    // Discover
    const shouldHaveInvisibleHeader = (this.currentRoute == '/' || this.currentRoute == '/charters-in-spain' || this.currentRoute == '/discover');
    if (shouldHaveInvisibleHeader) {
      return customwindow.innerHeight
    }
    
    // Contact
    else if (this.currentRoute == '/contact' || this.currentRoute == '/about') {
      return customwindow.innerHeight * 0.4;
    }
  }



  //----------------------------------------------------------
  // Restyle on Route or Window's width change
  //----------------------------------------------------------

  technicalRestyle() {

    const White = ['/discover',
                   '/vr-experience', '/vr-experience/video', '/vr-experience/thank-you', '/vr-experience/enquire', '/vr-experience/appointment', '/vr-experience/confirmation',
                   '/contact'],
          currentRoute = this.currentRoute,
          checkRoute = (element) => { return element == currentRoute };

    // Preventing auto off on route change
    this.routeState.changed = true;

    const shouldHaveInvisibleHeader = (currentRoute == '/' || currentRoute == '/charters-in-spain' || currentRoute == '/discover');
    //------------------------------------
    // Clear interactionRestyle timer
    //------------------------------------

    if (typeof this.interactionRestyle.Timer !== undefined) {
      clearTimeout(this.interactionRestyle.Timer);
    }

    if (shouldHaveInvisibleHeader && this.containerClasses.contains('interacting')) {
      setTimeout(() => {
        this.containerClasses.remove('interacting');
        this.containerClasses.add('reseting');
        setTimeout(() => {
          this.containerClasses.remove('reseting');
        }, 600)
      }, 1000)

    }
    let customwindow;
    if (typeof(document) === 'object') {
      customwindow = window;
     }
     else {
      customwindow = {
        innerHeight:0
        }
      }
    //------------------------------------
    // Moblile < 900
    //------------------------------------

    if (customwindow.innerWidth < 900 ) {
      this.componentState = { mobileView: false, compassInverted: false, compassVisible: true, linksVisible: false, contact: false, about: false };
    }


    //------------------------------------
    // 900 < Devices < 1200
    //------------------------------------

    else if (900 < customwindow.innerWidth && customwindow.innerWidth < 1200) {
      this.componentState = { mobileView: false, compassInverted: false, compassVisible: true, linksVisible: false, contact: false, about: false };
    }


    //------------------------------------
    // Devices > 1200
    //------------------------------------

    else if (customwindow.innerWidth >= 1200) {
      // Discover
      if (shouldHaveInvisibleHeader) {
        this.componentState = { mobileView: false, compassInverted: false, compassVisible: false, linksVisible: true, contact: false, about: false } 
      }
      // About
      else if (currentRoute == '/about') {
        this.componentState = { mobileView: false, compassInverted: true, compassVisible: true, linksVisible: false, contact: false, about: true } }

      // Contact
      else if (currentRoute == '/contact') {
        this.componentState = { mobileView: false, compassInverted: false, compassVisible: true, linksVisible: false, contact: true, about: false } }

      // White Links
      else if (White.some(checkRoute)) {
        this.componentState = { mobileView: false, compassInverted: false, compassVisible: true, linksVisible: false, contact: false, about: false } }
    }
  }



  //----------------------------------------------------------
  // Restyle Implememtation for User Interaction
  //----------------------------------------------------------

  interactionRestyle = {

    //--------------------------
    // Compass hover & click
    //--------------------------
    
    On: () => {
      let customwindow;
      if (typeof(document) === 'object') {
        customwindow = window;
       }
       else{
        customwindow = {
          innerHeight:0
          }
        }
      // mobileView < 900
      if (customwindow.innerWidth <= 899) {
        this.componentState.mobileView = true;
        this.componentState.linksVisible = true;
      }

      // 900 < Devices < 1200
      else if (900 < customwindow.innerWidth && customwindow.innerWidth < 1200) {
        this.componentState.compassVisible = false;
        // this.componentState.mobileView = true;
        this.componentState.linksVisible = true;
      }

      // Contact route
      else if (this.componentState.contact || this.componentState.about) {
        this.componentState.compassVisible = false;
        this.linksClasses.add('linksVisible');
        this.containerClasses.add('interacting');
      }
      else {
        this.componentState.compassVisible = false;
        this.linksClasses.add('linksVisible');
        // this.containerClasses.add('interacting');
      }

      // About route
      // else if (this.componentState.about) {
      //   this.linksClasses.add('linksVisible');
      //   this.containerClasses.add('interacting');
      // }
    },


    //--------------------------
    // Cross click
    //--------------------------

    instantOff: () => {
      this.componentState.linksVisible = false; 
      this.componentState.mobileView = false;
    },



    //--------------------------
    // Cross click
    //--------------------------

    Off: () => {
      let customwindow;
      if (typeof(document) === 'object') {
        customwindow = window;
       }
       else {
         customwindow = {
          innerHeight:0
          }
        }
        const shouldHaveInvisibleHeader = this.currentRoute != '/' && this.currentRoute != '/discover' && this.currentRoute != '/charters-in-spain';
      // Because no compass on Discover
      if (shouldHaveInvisibleHeader) {
        
        if (this.routeState.changed) {
          this.routeState.changed = false
        } else {
          this.interactionRestyle.Timer = setTimeout(() => {

            // 900 < Devices < 1200
            if (900 < customwindow.innerWidth && customwindow.innerWidth < 1200) {
              this.componentState.compassVisible = true;
            }

            // Devices > 1200 && About
            else if (customwindow.innerWidth >= 1200) {
              this.componentState.mobileView = false;

              // Contact  // About
              if (this.componentState.contact || this.componentState.about) {
                this.containerClasses.remove('interacting');
                this.containerClasses.add('hiding');
                this.componentState.compassVisible = true;
                setTimeout(() => {
                  this.containerClasses.remove('hiding');
                  this.linksClasses.remove('linksVisible');
                  this.componentState.linksVisible = false;
                }, 200)
              }


              // About
              // else if (this.componentState.about) {

              // }
            }
          // Delay
          }, 1400);
        }
      }
      // else {
      //   this.containerClasses.remove('interacting');
      // }
    },


    //--------------------------
    // Timer holder
    //--------------------------

    Timer: undefined,


    //--------------------------
    // Timer remover
    //--------------------------

    clearTimer: () => {
      if (typeof this.interactionRestyle.Timer !== undefined) {
        clearTimeout(this.interactionRestyle.Timer);
      }
    },
  }
}
