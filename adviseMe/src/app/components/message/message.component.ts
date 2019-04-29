import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  
  content: string[];
  isYour: boolean;

  constructor( content: string[], isYour: boolean ) {
    this.content = content;
    this.isYour = isYour;
  }

  ngOnInit() {
  }

}
