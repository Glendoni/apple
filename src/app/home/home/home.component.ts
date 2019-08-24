import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {DynamicformService} from '../../_services';
import { UserType } from '../../userType';
import { Observable, Subject } from 'rxjs';
import {User} from '../../_models';
import {UserService} from '../../_services';

@Component({templateUrl: 'home.component.html', styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    users: User[] = [];
    fields;
    moduleSwitcher;
    logged_in_user: string;
    usert$: Observable<UserType[]>;

    constructor(private userService: UserService, private service: DynamicformService) {
     //  this.service.getName().subscribe();

    // console.log(this.usert$)
    }

    ngOnInit() {
        // this.userService.getAll().pipe(first()).subscribe(User => this.users.push(User));
        this.service.formGetStudies().subscribe((data) => {
            this.fields = data;
        });
        // this.service.getFormUser().subscribe((data) => {
        //     this.logged_in_user = data.name;
        // });
    }

    onModuleSwitcher(value): void {
        this.moduleSwitcher = value;

    }

    onClose(event: Event): void {

        this.moduleSwitcher = false;
    }
}
