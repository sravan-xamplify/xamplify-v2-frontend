import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../../shared/services/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth.service';
import { AppStateService } from '../../shared/services/app-state.service';

@Component({
    selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgbModule, NgbNavModule],
    providers: [FirebaseService],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  public showPassword: boolean = false;

  toggleClass = 'ri-eye-off-line';
  active="Angular";
  firestoreModule: any;
  databaseModule: any;
  authModule: any;

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'ri-eye-line') {
      this.toggleClass = 'ri-eye-off-line';
    } else {
      this.toggleClass = 'ri-eye-line';
    }
}
disabled = '';
// public localdata:any=this.appStateService;

constructor(
 private elementRef: ElementRef,
  public authservice: AuthService,
  private router: Router,
  private formBuilder: FormBuilder,
  private firebaseService: FirebaseService,
  private toastr: ToastrService ,
  private appStateService: AppStateService,
) {
   document.body.classList.add('authentication-background');
  const htmlElement =
  this.elementRef.nativeElement.ownerDocument.documentElement;
    htmlElement.removeAttribute('style'); 
}
ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    username: ['xamplify@admin.com', [Validators.required, Validators.email]],
    password: ['Xamplify@07', Validators.required],
  });

  this.firestoreModule = this.firebaseService.getFirestore();
  this.databaseModule = this.firebaseService.getDatabase();
  this.authModule = this.firebaseService.getAuth();
}

ngOnDestroy(): void {
  document.body.classList.remove('authentication-background');    
}


// firebase
email = 'xamplify@admin.com';
password = 'Xamplify@07';
errorMessage = ''; // validation _error handle
_error: { name: string; message: string } = { name: '', message: '' }; // for firbase _error handle


clearErrorMessage() {
  this.errorMessage = '';
  this._error = { name: '', message: '' };
}

login() {
  // console.log(this.loginForm)

  // this.disabled = "btn-loading"
  this.clearErrorMessage();
  if (this.validateForm(this.email, this.password)) {
    this.authservice
      .loginWithEmail(this.email, this.password)
      .then(() => {
        this.router.navigate(['/sales']);
        console.clear();
      
      })
      .catch((_error: any) => {
        this._error = _error;
        this.router.navigate(['/']);
      });
  }
}

validateForm(email: string, password: string) {
  if (email.length === 0) {
    this.errorMessage = 'please enter email id';
    return false;
  }

  if (password.length === 0) {
    this.errorMessage = 'please enter password';
    return false;
  }

  if (password.length < 6) {
    this.errorMessage = 'password should be at least 6 char';
    return false;
  }

  this.errorMessage = '';
  return true;
}
//angular
public loginForm!: FormGroup;
public error: any = '';

get form() {
  return this.loginForm.controls;
}

Submit() {
  if (
    this.loginForm.controls['username'].value === 'xamplify@admin.com' &&
    this.loginForm.controls['password'].value === 'Xamplify@07'
  ) {
  // mark a local session so auth guard passes for demo login
  this.authservice.setLocalSession('demo');
    this.router.navigate(['/sales']);
    this.toastr.success('login successful','xAmplify', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  } else {
    this.toastr.error('Invalid details','xAmplify', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }

}

toggleVisibility() {
  this.showPassword = !this.showPassword;
  if (this.toggleClass === "ri-eye-line") {
    this.toggleClass = "ri-eye-off-line";
  } else {
    this.toggleClass = "ri-eye-line";
  }
}
}
