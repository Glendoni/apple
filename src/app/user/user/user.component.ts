import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
 users: User[] = [];
  ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
       });
      
      
  }

}
