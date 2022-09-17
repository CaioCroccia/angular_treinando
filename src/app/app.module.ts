import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderCaioComponentComponent } from './header-caio-component/header-caio-component.component';
import { CaioTimerComponentComponent } from './caio-timer-component/caio-timer-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderCaioComponentComponent, CaioTimerComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
