import { Component, OnInit } from '@angular/core';

import { FiledType } from '../fieldType';
import { FiledTypeMenu } from '../fieldTypeMenu';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {


  filedTypeMenus = FiledTypeMenu;

  selectedFieldType: FiledType;

  constructor() { }

  ngOnInit() {
  }

  onSelect(filedTypeMenu: FiledType): void {
    this.selectedFieldType = filedTypeMenu;
  }
}
