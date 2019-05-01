import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ActionService } from '../../services/action.service';
import { actions } from '../../enums/actions';
import { createMessage } from '../../model/message.model';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  mainCommands = Object.keys(actions);
  additionalCommands = ['weather', 'open', 'help', 'clear'];
  recentMessages = [];
  messageContent = '';
  user = null;
  @ViewChild('messageContainer') messageContainer: ElementRef;

  constructor(
    private restService: RestService,
    private actionService: ActionService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getHelp();
  }

  sendYourMessage() {
    const lastCommand = this.messageContent;
    this.messageContent = '';
    if (lastCommand !== '') {
      this.recentMessages.push(createMessage(lastCommand.split('\n'), true));
      setTimeout(() => { this.getSystemResponse(lastCommand); }, 100);
    }
  }

  sendSystemMessage(messageContent) {
    this.recentMessages.push(createMessage(messageContent.split('\n'), false));
    setTimeout(() => { this.scrollDownMessageContainer(); }, 100);
  }

  scrollDownMessageContainer() {
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
  }

  getSystemResponse(command) {
    command = command.trim();
    const commandName = command.split(' ')[0];

    if (this.mainCommands.includes(command)) {
      this.handleMainCommand(command);
    }
    else if (this.additionalCommands.includes(commandName)) {
      this.handleAdditionalCommand(command, commandName);
    } else {
      this.sendSystemMessage('No such command. Use \'help\' to see all options');
    }
    this.scrollDownMessageContainer();
  }

  handleMainCommand(command) {
    this.sendSystemMessage('<b>Okay!</b>');
    this.actionService.changeAction(command);
  }

  handleAdditionalCommand(command, commandName) {
    if (commandName === 'weather') {
        if (!this.checkArgs(command, 1)) { return; }
        const city = command.split(' ')[1];
        this.restService.getWeatherData(city).subscribe(data => {
          const weatherInfo = 'Now in ' + city + ' <b>' + data.main.temp + '&#176;C</b> and ' + data.weather[0].description;
          this.sendSystemMessage(weatherInfo);
        }, () => {
          this.sendSystemMessage('Error in processing your request, please check city name');
        }
      );
    }
    if (commandName === 'help') {
      if (!this.checkArgs(command, 0)) { return; }
      this.getHelp();
    }
    if (commandName === 'open') {
      if (!this.checkArgs(command, 1)) { return; }
      const url = command.split(' ')[1];
      window.open('https://' + url, '_blank');
    }
    if (commandName === 'clear') {
      if (!this.checkArgs(command, 0)) { return; }
      this.recentMessages = [];
    }
  }

  checkArgs(commandName, needed) {
    const argsNum = commandName.split(' ').length - 1;
    if (argsNum !== needed) {
      const systemMessage = 'You have <b>' + argsNum.toString() + '</b> arguments, but <b>' + needed.toString() + '</b> needed!';
      this.sendSystemMessage(systemMessage);
      return false;
    }
    return true;
  }

  getHelp() {
    let helpText = '<i>Help</i>';
    helpText += '\n<b>Main commands:</b>';
    this.mainCommands.forEach((commandName) => {
      helpText += '\n-' + commandName;
    });
    helpText += '\n<b>Additional commands:</b>';
    this.additionalCommands.forEach((commandName) => {
      helpText += '\n-' + commandName;
    });
    this.sendSystemMessage(helpText);
  }
}

if (typeof(String.prototype.trim) === 'undefined') {
    String.prototype.trim = function() {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
