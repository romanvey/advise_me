import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  
  recentMessages = [];
  messageContent = '';
  @ViewChild('messageContainer') messageContainer: ElementRef;

  constructor() { }

  ngOnInit() {
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
