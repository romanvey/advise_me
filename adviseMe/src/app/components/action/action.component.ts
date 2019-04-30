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

  constructor(
    private actionService: ActionService
  ) { }

  ngOnInit() {
    this.actionService.actionChanged$.subscribe(data => {
      this.actionTitle = data;
      this.activeAction = actions[data];
    })
  }

}
