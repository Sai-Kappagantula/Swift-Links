import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpensesPage } from '../expenses/expenses';
import { DebtsPage } from '../debts/debts';
import { MainPage } from '../main/main';
/**
 * Generated class for the BalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class BalancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BalancePage');
  }

  Expenses(){
  		this.navCtrl.push(ExpensesPage);
  }
    Debts(){
  		this.navCtrl.push(DebtsPage);
  }
	home() {
		this.navCtrl.push(MainPage);
	}
}
