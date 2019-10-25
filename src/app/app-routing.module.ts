import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { LesKurdesComponent } from './components/les-kurdes/les-kurdes.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Proposition',component:PropositionComponent},
  {path:'LesKurdes',component:LesKurdesComponent},
  {path:'Contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
