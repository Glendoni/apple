import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthenticationService, DynamicformService} from "../_services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sub-user-listing',
  templateUrl: './sub-user-listing.component.html',
  styleUrls: ['./sub-user-listing.component.css']
})
export class SubUserListingComponent implements OnInit {
  @Input() siteDetails;
  @Output() close: EventEmitter<any> = new EventEmitter();
  fields: any;
  studyQuestions;
  sub_user = false

  constructor(private fb: FormBuilder, private service: DynamicformService, private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    console.log(this.getDetails);
    this.service.studyItemListing(this.siteDetails).subscribe(data => {
      this.fields = data;

    });
  }

  onSubListingEdit(value){
console.log(value);
    this.sub_user = value;

  }
  onClose() {
    this.close.emit(null);
  }
}
