import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {DynamicformService} from '../../_services';

import {User} from '../../_models';
import {UserService} from '../../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    users: User[] = [];
    fields;
    moduleSwitcher;
    constructor(private userService: UserService, private service: DynamicformService) {
        //console.log('');
    }

    ngOnInit() {
        // this.userService.getAll().pipe(first()).subscribe(User => this.users.push(User));
        this.service.getStudies().subscribe((data) => {
            this.fields = data;
        });
    }

    onModuleSwitcher(value): void {
        this.moduleSwitcher = value;
        console.log(value)
    }

    onClose(event: Event): void {

        this.moduleSwitcher = false;
    }
}
