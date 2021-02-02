import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {

  @Input() dataRow: User = new User();

  @Output() selectClick: EventEmitter<Boolean> = new EventEmitter();
  @Output() updateClick: EventEmitter<Boolean> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectClicked(): void {
    this.selectClick.emit(true);
    this.dataRow = new User();
  }
  onUpdateClicked(): void {
    this.updateClick.emit(true);
    this.dataRow = new User();
  }
  onDeleteClicked(): void {
    this.deleteClick.emit(true);
    this.dataRow = new User();
  }

}
