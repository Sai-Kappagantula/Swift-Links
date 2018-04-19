import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { NewexpensePage } from '../newexpense/newexpense';
import { ExpensesPage } from '../expenses/expenses';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  

  }
  removeItem() {
      
  }
  settings() {
  		this.navCtrl.push(SettingsPage);
 	 }
  ionViewDidLoad() {
      console.log('ionViewDidLoad MainPage');
  }
  newExpense(){
  	 this.navCtrl.push(NewexpensePage);
  }
  ToExpenses() {
    this.navCtrl.push(ExpensesPage);
  }
}
