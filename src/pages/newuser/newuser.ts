import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user';

/**
 * Generated class for the NewuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newuser',
  templateUrl: 'newuser.html',
})
export class NewuserPage {

	user = {} as User;

  constructor(private afAuth: AngularFireAuth, 

  	public navCtrl: NavController, public navParams: NavParams) {
 	 }

  async register(user: User) {
  try{
 		const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
 		console.log(result);
 	}
 	catch(e) {
 		console.error(e);
 	}
  }

}
