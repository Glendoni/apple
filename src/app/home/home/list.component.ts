import { AfterViewInit, Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({
  template: `
    <p>Welcome to the Crisis Center</p>
 
<ul>
<li *ngFor="let user of users ">
    
    {{ users | json }}
    </li>
</ul>
 
<ngx-smart-modal #myModal identifier="myModal">
  <div *ngIf="myModal.hasData()">
    <pre>{{ myModal.getData() | json }}</pre>
  </div>

  <button (click)="myModal.close()">Close</button>
</ngx-smart-modal>

<ngx-smart-modal #myModal2 identifier="myModal2">
  <div *ngIf="myModal.hasData()">Pitty
    <pre>{{ myModal.getData() | json }}</pre>
  </div>

  <button (click)="myModal2.close()">Close</button>
</ngx-smart-modal>

<button (click)="ngxSmartModalService.getModal('myModal').open()">Open myModal</button>
<button (click)="ngxSmartModalService.getModal('myModal2').open()">Open myModal 2</button>



  `
})
export class ListComponent implements OnInit, AfterViewInit {
    users: User[] = [];
 heroes = [1,2,3];
    constructor(private userService: UserService, public ngxSmartModalService: NgxSmartModalService) {}

    ngOnInit() {
        
       
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
       });
      
    
    }
    
      ngAfterViewInit() {
   
    const obj: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{a: 'a', b: 'b'}, {c: 'c', d: 'd'}],
      prop4: 327652175423
    };

    this.ngxSmartModalService.setModalData(obj, 'myModal');
          
          const objw: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{a: 'a', b: 'b'}, {c: 'c', d: 'd'}],
      prop4: 327652175423
    };

    this.ngxSmartModalService.setModalData(objw, 'myModal2');
            //this.ngxSmartModalService.getModal('myModal2').open(); open on load
  }
}