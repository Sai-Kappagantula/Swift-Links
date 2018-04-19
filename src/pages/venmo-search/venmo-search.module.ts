import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VenmoSearchPage } from './venmo-search';

@NgModule({
  declarations: [
    VenmoSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(VenmoSearchPage),
  ],
})
export class VenmoSearchPageModule {}
