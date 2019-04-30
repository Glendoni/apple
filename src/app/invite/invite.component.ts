import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AuthenticationService, DynamicformService} from "../_services";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  subscribedParam: string;
  constructor(private  route: ActivatedRoute,
              private  router: Router,
              private service: DynamicformService,) { }

  ngOnInit() {


    this.subscribedParam = this.route.snapshot.paramMap.get('id');


    this.service.inviteConfigurator(this.subscribedParam).subscribe( data => {

if(data){
  this.router.navigate(['/login']);
  console.log('go go go');
}else{

  console.log('no no no');
}

    })


  }

  }


