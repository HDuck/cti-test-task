import { Component, OnInit } from '@angular/core';
import { PusherService } from '../pusher.service';

interface Message {
  text: string;
  user: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})

export class ChatComponent implements OnInit {
  messages: Array<Message>;

  constructor(private pusherService: PusherService) {
    this.messages = [];
  }

  ngOnInit() {
    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.messages.push(message);
    });
  }

  sendMessage(user = 'user', text: string) {
    const message: Message = {
       user: user,
       text: text
    };
    
    if (text) {
      this.pusherService.messagesChannel.trigger('client-new-message', message);
      this.messages.push(message);
    }
  }
}
