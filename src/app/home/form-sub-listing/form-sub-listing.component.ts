import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthenticationService, FormService} from "../../_services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-sub-listing',
  templateUrl: './form-sub-listing.component.html',
  styleUrls: ['./form-sub-listing.component.css']
})
export class FormSubListingComponent implements OnInit {

  @Input() siteDetails;
  @Output() close: EventEmitter<any> = new EventEmitter();
  fields: any;
  itemQuestions = false;
  subListingEdit = false;
  studyItem = false;
  fieldlist = true;
  studyItemListingDataLength = true;
  constructor(private fb: FormBuilder, private service: FormService, private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {

    this.service.studyItemListing(this.siteDetails.id).subscribe(data => {
      this.fields = data;

      this.showhideMessage(data);

    });
  }

  showhideMessage(value){


if(!value.length) {
  this.studyItemListingDataLength = false;

}
  }

  onItemQuestions(value){
    this.studyItem = value.name
    this.itemQuestions = this.siteDetails;
    this.fieldlist = false;
  }
  onClose() {
    this.close.emit(null);
  }
}
