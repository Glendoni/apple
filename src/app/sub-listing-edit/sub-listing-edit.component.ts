import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService, DynamicformService} from "../_services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sub-listing-edit',
  templateUrl: './sub-listing-edit.component.html',
  styleUrls: ['./sub-listing-edit.component.css']
})
export class SubListingEditComponent implements OnInit {
  @Input() siteDetails;
  @Output() close: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: DynamicformService, private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      note: ['', Validators.required],
      study_id: [this.siteDetails, Validators.required],

    });
console.log(this.siteDetails);
    this.service.getStudyItem(this.siteDetails.id).subscribe(data => {

      this.f.name.setValue(data.name);
      this.f.note.setValue(data.note);
      this.f.study_id.setValue(data.study_id);
    });

  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.siteDetails.id);
    console.log('value: ', this.form.value);
    console.log('valid: ', this.form.valid);
    console.log('value: ', this.form.value);
    this.service.studyItemUpdate(this.siteDetails.id,this.form.value).subscribe(data => {
      console.log(data);
    });

  }

  onCancel() {
    this.close.emit(null);
  }
}

