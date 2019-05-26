import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { ExchangeComponent } from './header/exchange/exchange.component';
import { BankPickUpComponent } from './bank-pick-up/bank-pick-up.component';
import { BpuHeadComponent } from './bank-pick-up/bpu-head/bpu-head.component';
import { OnGoWithComponent } from './on-go-with/on-go-with.component';
import { SendOnlineComponent } from './send-online/send-online.component';
import { SentAgentComponent } from './sent-agent/sent-agent.component';
import { ConnectivityComponent } from './connectivity/connectivity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    ExchangeComponent,
    BankPickUpComponent,
    BpuHeadComponent,
    OnGoWithComponent,
    SendOnlineComponent,
    SentAgentComponent,
    ConnectivityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
