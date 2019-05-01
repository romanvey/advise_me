import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ActionService {

  private actionChangedSource = new Subject<any>();
  public actionChanged$ = this.actionChangedSource.asObservable();

  constructor() { }

  changeAction(actionCommand) {
    this.actionChangedSource.next(actionCommand);
  }
}
