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

  mainCommands = ['lose weight', 'give up smoking', 'gain muscle'];
  additionalCommands = ['weather', 'open', 'help'];
  recentMessages = [];
  messageContent = '';
  @ViewChild('messageContainer') messageContainer: ElementRef;

  constructor(
    private restService: RestService
  ) { }

  ngOnInit() {
    this.getHelp();
  }


  sendYourMessage() {
    let lastCommand = this.messageContent;
    this.messageContent = '';
    if (lastCommand !== '') {
      this.recentMessages.push(new MessageComponent(lastCommand.split('\n'), true));
      setTimeout(() => {this.getSystemResponse(lastCommand)}, 100);
    }
  }

  
  sendSystemMessage(messageContent){
    this.recentMessages.push(new MessageComponent(messageContent.split('\n'), false));
    setTimeout(() => {this.scrollDownMessageContainer()}, 100);
  }


  scrollDownMessageContainer() {
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
  }


  getSystemResponse(command){
    command = command.trim();
    let commandName = command.split(' ')[0];

    if (this.mainCommands.indexOf(command) > -1){
      this.handleMainCommand(command);
    }
    if (this.additionalCommands.indexOf(commandName) > -1){
      this.handleAdditionalCommand(command, commandName);
    }
    this.scrollDownMessageContainer();
  }


  handleMainCommand(command){
    // TODO: handling main commands
    this.sendSystemMessage('<b>Okay!</b>');
  }


  handleAdditionalCommand(command, commandName){
    if (commandName === 'weather'){
        if (!this.checkArgs(command, 1)) return;
        let city = command.split(' ')[1];
        this.restService.getWeatherData(city).subscribe(data => {
          let weatherInfo = 'Now in ' + city + ' <b>' + data['main']['temp'] + '&#176;C</b> and ' + data['weather'][0]['description'];
          this.sendSystemMessage(weatherInfo);
        }
      );
    }
    if (commandName === 'help'){
      if (!this.checkArgs(command, 0)) return;
      this.getHelp();
    }
    // TODO: handling
    if (commandName === 'open'){

    }
  }


  checkArgs(commandName, needed){
    let argsNum = commandName.split(' ').length - 1
    if (argsNum !== needed){
      let systemMessage = 'You have <b>' + argsNum.toString() + '</b> arguments, but <b>' + needed.toString() + '</b> needed!';
      this.sendSystemMessage(systemMessage);
      return false;
    }
    return true;
  }

  getHelp() {
    let helpText = '<i>Help</i>';
    helpText += '\n<b>Main commands:</b>'
    this.mainCommands.forEach((commandName) => {
      helpText += '\n-' + commandName;
    });
    helpText += '\n<b>Additional commands:</b>'
    this.additionalCommands.forEach((commandName) => {
      helpText += '\n-' + commandName;
    });
    this.sendSystemMessage(helpText);
  }
}


if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}