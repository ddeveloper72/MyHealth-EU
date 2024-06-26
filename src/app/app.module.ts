import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MySiteComponent } from './my-site/my-site.component';
import { EtEHRComponent } from './etehr/etehr.component';
import { XtEHRComponent } from './xtehr/xtehr.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { PathedComponent } from './pathed/pathed.component';
import { PotentialComponent } from './potential/potential.component';
import { XshareComponent } from './xshare/xshare.component';
import { MyhealthComponent } from './myhealth/myhealth.component';
import { NavlistComponent } from './navlist/navlist.component';
import { IHEComponent } from './ihe/ihe.component';
import { IPSComponent } from './ips/ips.component';
import { UNICOMComponent } from './unicom/unicom.component';
import { routes } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCardImage } from '@angular/material/card';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatCardImage,
  ],
  declarations: [
    AppComponent,
    MySiteComponent,
    EtEHRComponent,
    XtEHRComponent,
    PartnershipsComponent,
    PathedComponent,
    PotentialComponent,
    XshareComponent,
    MyhealthComponent,
    NavlistComponent,
    IHEComponent,
    IPSComponent,
    UNICOMComponent,
  ],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
// Path: my-prototype/src/app/app-routing.module.ts
