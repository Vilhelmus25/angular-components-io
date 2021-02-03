import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { User } from 'src/app/model/user';
import { DataRowComponent } from '../data-row/data-row.component';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input() dataList: User[] = [];

  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  dataRow: User = new User();     // ez egy üres sor lesz és ezt adja tovább, ezért töröl a végéről, stb.
  idHeader: string = 'id';
  nameHeader: string = 'name';
  emailHeader: string = 'email';
  addressHeader: string = 'address';
  activeHeader: string = 'active';

  constructor() {

  }

  ngOnInit(): void {
    //console.log(this.dataList[0]);

  }

  onSelectClicked(): void {
    this.selectClick.emit(this.dataRow);
  }
  onUpdateClicked(): void {
    this.updateClick.emit(this.dataRow);
  }
  onDeleteClicked(): void {
    this.deleteClick.emit(this.dataRow);
  }

}
