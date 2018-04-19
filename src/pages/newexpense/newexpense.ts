import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { VenmoSearchPage } from '../venmo-search/venmo-search';

/**
 * Generated class for the NewexpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newexpense',
  templateUrl: 'newexpense.html',
})
export class NewexpensePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewexpensePage');
  }
	returnToBills() {
		this.navCtrl.push(MainPage);
	}
	Saved(){
		console.log("Saved");
	}
	VenmoSearch() {
	this.navCtrl.push(VenmoSearchPage)
	}
}
