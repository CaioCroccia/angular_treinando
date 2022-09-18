import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caiosimple-interest-component',
  templateUrl: './caiosimple-interest-component.component.html',
  styleUrls: ['./caiosimple-interest-component.component.css'],
})
export class CaiosimpleInterestComponentComponent implements OnInit {
  valor: number;
  periodo: number;
  taxa: number;
  

  constructor() {
    this.valor = 0;
    this.periodo = 0;
    this.taxa = 0.1;
  }

  ngOnInit() {}

  getJuros() {
    return this.valor * (1 + (this.taxa / 100) * this.periodo);
  }
}
