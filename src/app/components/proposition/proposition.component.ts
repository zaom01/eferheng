import { Component, OnInit } from '@angular/core';
import { PropostionService} from '../../services/propostion.service';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {

  constructor( private ps: PropostionService) { }

  addProposition(Nav,Pasnav,Herem,Pesniyari) {
     this.ps.addProduct(Nav,Pasnav,Herem,Pesniyari);
   }
  ngOnInit() {
  }

}
