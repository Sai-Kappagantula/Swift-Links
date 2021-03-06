import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewuserPage } from '../pages/newuser/newuser';
import { MainPage } from '../pages/main/main';
import { SettingsPage } from '../pages/settings/settings';
import { BalancePage } from '../pages/balance/balance';
import { ExpensesPage } from '../pages/expenses/expenses';
import { DebtsPage } from '../pages/debts/debts';
import { VenmoSearchPage } from '../pages/venmo-search/venmo-search';
import { NewexpensePage } from '../pages/newexpense/newexpense';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewuserPage,
    MainPage,
    SettingsPage,
    BalancePage,
    ExpensesPage,
    DebtsPage,
    VenmoSearchPage,
    NewexpensePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewuserPage,
    MainPage,
    SettingsPage,
    BalancePage,
    ExpensesPage,
    DebtsPage,
    VenmoSearchPage,
    NewexpensePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
