import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeLayoutComponent, 
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent implements OnInit {

  signupForm!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: [null,[Validators.required, Validators.email]],
      name:  [null,[Validators.required]],
      password:  [null,[Validators.required]],
      confirmPassword:  [null,[Validators.required, this.confirmationValidate]],
    })
  }

  confirmationValidate = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.signupForm.controls['password'].value) {
      return {confirm: true, error: true};
    }
    return {};
  };

  signup(){
    console.log(this.signupForm.value);
    this.authService.register(this.signupForm.value).subscribe((res) => {
      console.log(res);
  
      this.router.navigate(['/login']); 
    }, (error) => {
      console.error('Login Error', error);
    
    });
  }
}
