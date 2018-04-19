import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewuserPage } from '../newuser/newuser';
import { MainPage } from '../main/main';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {



  }

  openNewUserPage() {
  		this.navCtrl.push(NewuserPage);
 	 }
  loginGoogle() {
  		this.navCtrl.push(MainPage);
 	}
  loginFacebook() {
		this.navCtrl.push(MainPage);
  	}
  	Login(){
  		this.navCtrl.push(MainPage);
  	}

}
