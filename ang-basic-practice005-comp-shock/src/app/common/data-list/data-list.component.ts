import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

import { User } from 'src/app/model/user';
import { DataRowComponent } from '../data-row/data-row.component';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input() dataList: User[] = [];

  @Output() selectClick: EventEmitter<Boolean> = new EventEmitter();
  @Output() updateClick: EventEmitter<Boolean> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Boolean> = new EventEmitter();

  constructor(private dataRow: DataRowComponent) { }

  ngOnInit(): void {
  }

  onSelectClicked(): void {
    this.selectClick.emit(true);
    this.dataRow;
  }
  onUpdateClicked(): void {
    this.updateClick.emit(true);
    this.dataRow;
  }
  onDeleteClicked(): void {
    this.deleteClick.emit(true);
    this.dataRow;
  }

}
