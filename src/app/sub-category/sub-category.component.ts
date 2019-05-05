import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthenticationService, DynamicformService} from '../_services';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
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
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log('value: ', this.form.value);
    console.log('valid: ', this.form.valid);
    console.log('value: ', this.form.value);


    this.service.addStudyItem(this.form.value, this.siteDetails).subscribe(data => {

      console.log(data);
    });

  }

  onCancel() {
    this.close.emit(null);
  }
}

