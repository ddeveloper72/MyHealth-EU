import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { EtehrComponent } from './etehr/etehr.component';
import { HpinnoticeComponent } from './hpinnotice/hpinnotice.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { PathedComponent } from './pathed/pathed.component';
import { PinnoticeComponent } from './pinnotice/pinnotice.component';
import { XshareComponent } from './xshare/xshare.component';
import { MyhealthComponent } from './myhealth/myhealth.component';
import { MySiteComponent } from './my-site/my-site.component';

export const routes: Routes = [
  { path: 'myhealth', component: MyhealthComponent },
  { path: 'pinnotice', component: PinnoticeComponent },
  { path: 'hpinnotice', component: HpinnoticeComponent },
  { path: 'etehr', component: EtehrComponent },
  { path: 'partherships', component: PartnershipsComponent },
  { path: 'pathed', component: PathedComponent },
  { path: 'xshare', component: XshareComponent },
  { path: 'welcome', component: MySiteComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
