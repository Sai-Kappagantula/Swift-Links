import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BalancePage } from '../balance/balance';
import { ExpensesPage } from '../expenses/expenses';
import { MainPage } from '../main/main';


/**
 * Generated class for the DebtsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-debts',
  templateUrl: 'debts.html',
})
export class DebtsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DebtsPage');
  }
  Balance(){
  		this.navCtrl.push(BalancePage);
  }
  Expenses(){
  		this.navCtrl.push(ExpensesPage);
  }
	home() {
		this.navCtrl.push(MainPage);
	}
}
