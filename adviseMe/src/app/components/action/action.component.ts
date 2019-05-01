import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';
import { actions } from '../../enums/actions';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  activeAction = null;
  actionTitle = '';
  user = null;
  progress;

  constructor(
    private actionService: ActionService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.actionService.actionChanged$.subscribe(data => {
      this.actionTitle = data;
      this.activeAction = actions[data];
      this.activeAction.map(item => {
        item.completed = JSON.parse(localStorage.getItem(item.title + this.user.id));
      });
      this.updateProgressBar();
    });
  }

  toggleActionItemCompletion(actionItem) {
    actionItem.completed = !actionItem.completed;
    localStorage.setItem(actionItem.title + this.user.id, JSON.stringify(actionItem.completed));
    this.updateProgressBar();
  }

  updateProgressBar() {
    const completedItems = this.activeAction.filter(item => item.completed).length;
    this.progress = parseInt((completedItems / this.activeAction.length * 100).toString(), 10);
  }

}
