import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-button-group',
  templateUrl: './action-button-group.component.html',
  styleUrls: ['./action-button-group.component.scss']
})
export class ActionButtonGroupComponent implements OnInit {

  @Output() selectClick: EventEmitter<Boolean> = new EventEmitter();
  @Output() updateClick: EventEmitter<Boolean> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectButtonClick(): void {
    this.selectClick.emit(true);
  }
  onUpdateButtonClick(): void {
    this.updateClick.emit(true);
  }
  onDeleteButtonClick(): void {
    console.log("clicked");
    this.deleteClick.emit(true);
  }

}
