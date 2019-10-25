import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { LesKurdesComponent } from './components/les-kurdes/les-kurdes.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuiSommesNousComponent } from './components/qui-sommes-nous/qui-sommes-nous.component';


import { PropostionService } from './services/propostion.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    PropositionComponent,
    LesKurdesComponent,
    ContactComponent,
    QuiSommesNousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ PropostionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
