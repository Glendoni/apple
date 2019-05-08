import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthenticationService, DynamicformService} from '../_services';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-study-creater',
  templateUrl: './study-creater.component.html',
  styleUrls: ['./study-creater.component.css']
})
export class StudyCreaterComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  placeholder = 'Enter Site Name';
  @Input() siteDetails;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder, private service: DynamicformService,  private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      invite_code: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: [''],

    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log('value: ', this.form.value);
    console.log('valid: ', this.form.valid);

    this.service.createStudy(this.form.value)
        .pipe(first())
        .subscribe(
            data => {
               console.log(data);
              //this.alertService.success('Registration successful', true);
              // this.router.navigate(['/login']);
              this.router.navigate(['/dashboard']);
            }
        );
  }


  onCancel(){

    this.close.emit(null);

  }
}
