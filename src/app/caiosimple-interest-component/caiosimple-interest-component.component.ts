import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caiosimple-interest-component',
  templateUrl: './caiosimple-interest-component.component.html',
  styleUrls: ['./caiosimple-interest-component.component.css']
})
export class CaiosimpleInterestComponentComponent implements OnInit {
  valor: number;
  periodo: number;
  taxa: 0.1;



  constructor() { }

  ngOnInit() {
  }

  getJuros(){
    return this.valor * (1+ this.taxa * this.periodo);
  }

}