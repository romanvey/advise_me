import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  recentMessages = [];
  constructor() { }

  ngOnInit() {
    let message = new MessageComponent('Haha!', true);
    let message1 = new MessageComponent('Haha2222!', false);
    let message2 = new MessageComponent('Haha2222!', false);
    let message3 = new MessageComponent('Haha!', true);
    let message4 = new MessageComponent('Haha!', true);
    let message5 = new MessageComponent('Haha!', true);
    let message6 = new MessageComponent('Haha2222!', false);
    let message7 = new MessageComponent('Haha2222!', false);
    this.recentMessages.push(message);
    this.recentMessages.push(message1);
    this.recentMessages.push(message2);
    this.recentMessages.push(message3);
    this.recentMessages.push(message4);
    this.recentMessages.push(message5);
    this.recentMessages.push(message6);
    this.recentMessages.push(message7);

  }

}
