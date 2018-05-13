import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NewuserPage } from '../newuser/newuser';
import { MainPage } from '../main/main';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    user = {} as User;

  constructor(private afAuth: AngularFireAuth,
  public navCtrl: NavController) {

    

  }

  openNewUserPage() {
  		this.navCtrl.push(NewuserPage);
 	 }
  loginGoogle() {

 	}
  loginFacebook() {

  	}
  	async login(user: User){
      try{
        const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
        if (result) {
  		    this.navCtrl.push(MainPage);
        }
      }
  	   catch(e){
        console.error(e);
       }

    }

}
