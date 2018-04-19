import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BalancePage } from '../balance/balance';
import { DebtsPage } from '../debts/debts';
import { MainPage } from '../main/main';

/**
 * Generated class for the ExpensesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html',
})
export class ExpensesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpensesPage');
  }

 	Balance() {
 		this.navCtrl.push(BalancePage);
	 }
	Debts() {
		this.navCtrl.push(DebtsPage);
	}
	home() {
		this.navCtrl.push(MainPage);
	}
}
