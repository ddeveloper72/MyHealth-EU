import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { EtEHRComponent } from './etehr/etehr.component';
import { XtEHRComponent } from './xtehr/xtehr.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { PathedComponent } from './pathed/pathed.component';
import { PotentialComponent } from './potential/potential.component';
import { XshareComponent } from './xshare/xshare.component';
import { MyhealthComponent } from './myhealth/myhealth.component';
import { MySiteComponent } from './my-site/my-site.component';
import { UNICOMComponent } from './unicom/unicom.component';
import { IPSComponent } from './ips/ips.component';
import { IHEComponent } from './ihe/ihe.component';

export const routes: Routes = [
  { path: 'myhealth', component: MyhealthComponent },
  { path: 'potential', component: PotentialComponent },
  { path: 'xtehr', component: XtEHRComponent },
  { path: 'etehr', component: EtEHRComponent },
  { path: 'partherships', component: PartnershipsComponent },
  { path: 'pathed', component: PathedComponent },
  { path: 'xshare', component: XshareComponent },
  { path: 'ihe', component: IHEComponent },
  { path: 'ips', component: IPSComponent },
  { path: 'unicom', component: UNICOMComponent },
  { path: 'welcome', component: MySiteComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
