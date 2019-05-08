import { Component, OnInit, Input } from '@angular/core';

import { FiledType } from '../fieldType';
import { FiledTypeMenu } from '../fieldTypeMenu';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {

@Input() studyId;
  filedTypeMenus = FiledTypeMenu;

  selectedFieldType: FiledType;


  constructor() {


  }

  ngOnInit() {
    console.log(this.studyId)
  }

  onSelect(filedTypeMenu: FiledType): void {
    this.selectedFieldType = filedTypeMenu;
  }
}
