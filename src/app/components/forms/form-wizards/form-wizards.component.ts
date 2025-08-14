import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { NgbModule, NgbNavChangeEvent, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-form-wizards',
    imports: [SharedModule, NgbModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatStepperModule, FormsModule, ReactiveFormsModule, CommonModule, FlatpickrModule, NgSelectModule, RouterModule],
    templateUrl: './form-wizards.component.html',
    styleUrl: './form-wizards.component.scss'
})
export class FormWizardsComponent {
  active: any;
	disabled = true;
  
  basicDemoValue = '';
  firstFormGroup: any;
  secondFormGroup: any;
  thirdFormGroup: any;
  forthFormGroup: any;
  fifthFormGroup: any;

  onNavChange(changeEvent: NgbNavChangeEvent) {
		if (changeEvent.nextId === 1) {
			changeEvent.preventDefault();
		}
	}

  constructor(
    private modalService: NgbModal,
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  ngOninit(){
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ['', Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required],
    });
  }
  stepperOrientation: Observable<StepperOrientation>;

  contactForm!: FormGroup;
  jobForm!: FormGroup;
  educationForm!: FormGroup;

  nextTab(tabIndex: number) {
    switch (tabIndex) {
      case 1:
        if (this.contactForm.valid) {
          // Proceed to next tab
          break;
        } else {
          // Handle form validation error
          return;
        }
      // Handle validation for other tabs similarly
    }
  }
  
}
