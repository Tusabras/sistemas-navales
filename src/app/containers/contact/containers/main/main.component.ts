import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import Jump from 'jump.js';

// import 'rjs/add/operator/map';


@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})

export class MainComponent implements OnInit {

  constructor(private _http: Http, private _router:Router) {
    this.contactEmail = '';
    this.flagIsSending = false;
  }

  //------------------------------------
  // Variables
  //------------------------------------

  contactEmail:string;
  flagIsSending:boolean;
  text:string;
  title:string;
  status:string;
  googleMap:boolean = false;


  ngOnInit() {
    this.scrollTop();
  }



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



  //------------------------------------
  // Send Email
  //------------------------------------

  sendEmail() {
		let data = {
			contactEmail: this.contactEmail, }
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		this.flagIsSending = true;

		this._http.post('https://charterdart-server.herokuapp.com/wantToSubscribe', JSON.stringify(data), options)
			.map(res => res.text())
			.subscribe(
  			data => {
  				if (data === 'ERROR') {
  					this.text = "The information could not be send!";
  					this.title = "ERROR!";
  					this.status = "error";
  				}
  				else{
  					this.text = "The information was sent correctly!";
  					this.title = "Sent!";
  					this.status = "success";
  					this.contactEmail = "";
            this.finish();
  				}

  				this.flagIsSending = false;
  			});
	}



  //------------------------------------
  // Reset after sending
  //------------------------------------

  finish(){
    this.scrollTop();
    // this._router.navigate(['/vr-experience/confirmation']);
  }
}
