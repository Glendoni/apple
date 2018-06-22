import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import { first } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable,  Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent {
 
 

}
