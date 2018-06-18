import { AfterViewInit, Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit, AfterViewInit {
    users: User[] = [];
 
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
          
          const obj: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{a: 'a', b: 'b'}, {c: 'c', d: 'd'}],
      prop4: 327652175423
    };

    this.ngxSmartModalService.setModalData(obj, 'myModal2');
            //this.ngxSmartModalService.getModal('myModal2').open(); open on load
  }
}