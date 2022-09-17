import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caio-timer-component',
  templateUrl: './caio-timer-component.component.html',
  styleUrls: ['./caio-timer-component.component.css']
})
export class CaioTimerComponentComponent implements OnInit {
 counter = 0;

  constructor() { }

  ngOnInit() {
  }

  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);

  ResetCounter(){
    this.counter = 0;
  }

}