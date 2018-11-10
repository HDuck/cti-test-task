import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

import { PusherService } from './pusher.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PusherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
