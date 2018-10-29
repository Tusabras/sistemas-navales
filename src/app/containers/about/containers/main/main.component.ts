import { Component, OnInit } from '@angular/core';
import Jump from 'jump.js';


@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss','./styles/styles.scss']
})
export class MainComponent implements OnInit {

    constructor(){}

    brian   = { "background-image": `url("./assets/images/about/team/victor-canela.jpg")` };
    carmen  = { "background-image": `url("./assets/images/about/team/carmen.png")` };
    claudia = { "background-image": `url("./assets/images/about/team/claudia.png")`};



    //------------------------------------
    // Scroll Top
    //------------------------------------

    scrollTop() {
      Jump('.container', {
        duration: 600,
        offset: -100,
        callback: undefined,
        a11y: false
      });
    }

    ngOnInit() {
      this.scrollTop();
    }
}
