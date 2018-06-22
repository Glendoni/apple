import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserService, AuthenticationService } from '../../_services';
import { Observable, Subscription } from 'rxjs';
import { first  } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';
 import { ActivatedRoute } from '@angular/router';

 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
master= 'We Love the world';
   isLoggedIn: String;
    subscription: Subscription;
  constructor(private userService : UserService, private authenticationService : AuthenticationService, public ngxSmartModalService: NgxSmartModalService, private activatedRoute: ActivatedRoute) {
      
     this.subscription = this.authenticationService.isLoggedIn().subscribe(isLoggedIn => { this.isLoggedIn = isLoggedIn; });
      
       this.activatedRoute.url.subscribe( params => console.log(params) );
      
      console.log(this.isLoggedIn);
      
  }
  ngOnInit(): void{
   
      
  }
    
      ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
          
        
    }

}
