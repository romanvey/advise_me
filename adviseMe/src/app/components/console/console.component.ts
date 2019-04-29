import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  
  recentMessages = [];
  messageContent = '';
  @ViewChild('messageContainer') messageContainer: ElementRef;

  constructor(
    private restService: RestService
  ) { }

  ngOnInit() {
<<<<<<< HEAD
=======
    let message = new MessageComponent('Haha!', true);
    let message1 = new MessageComponent('Haha2222!', false);
    let message2 = new MessageComponent('Haha2222!', false);
    let message3 = new MessageComponent('Haha!', true);
    let message4 = new MessageComponent('Haha!', true);
    let message5 = new MessageComponent('Haha!', true);
    let message6 = new MessageComponent('Haha2222!', false);
    let message7 = new MessageComponent('Haha2222!', false);
    let message8 = new MessageComponent('Haha!', true);
    let message9 = new MessageComponent('Haha2222!', false);
    let message10 = new MessageComponent('Haha2222!', false);
    let message11 = new MessageComponent('Haha!', true);
    let message12 = new MessageComponent('Haha!', true);
    let message13 = new MessageComponent('Haha!', true);
    let message14 = new MessageComponent('Haha2222!', false);
    let message15 = new MessageComponent('Haha2222!', false);
    this.recentMessages.push(message);
    this.recentMessages.push(message1);
    this.recentMessages.push(message2);
    this.recentMessages.push(message3);
    this.recentMessages.push(message4);
    this.recentMessages.push(message5);
    this.recentMessages.push(message6);
    this.recentMessages.push(message7);
    this.recentMessages.push(message8);
    this.recentMessages.push(message9);
    this.recentMessages.push(message10);
    this.recentMessages.push(message11);
    this.recentMessages.push(message12);
    this.recentMessages.push(message13);
    this.recentMessages.push(message14);
    this.recentMessages.push(message15);

    this.restService.getWeatherData('Lviv').subscribe(data => {
        console.log(data);
      }
    );

>>>>>>> e1e884507f286123dc3852ed8f3463bb05d65133
  }

  sendMessage() {
    if (this.messageContent !== '') {
      this.recentMessages.push(new MessageComponent(this.messageContent, true));
      this.messageContent = '';
      setTimeout(() => {this.scrollDownMessageContainer()}, 100);
    }
  }

  scrollDownMessageContainer() {
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
  }

  getHelp() {
    const helpText = `
    
    `
    this.recentMessages.push(new MessageComponent(helpText, false));
    setTimeout(() => {this.scrollDownMessageContainer()}, 100);
  }
}
