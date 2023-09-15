import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalVarsService } from 'src/app/services/global-vars.service';
import { LoginRequest, User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hidePassword: boolean = true;
  hideConfirmePassword: boolean = true;

  loginRequestForm = this.formBuilder.group({
    input: [null, Validators.required],
    password: [null, Validators.required],
  });

  registerForm = this.formBuilder.group({
    name: [null, Validators.required],
    nickname: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    phoneNumber: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private globalVarsService: GlobalVarsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    const loginRequest: LoginRequest = this.loginRequestForm
      .value as unknown as LoginRequest;

    this.authService.login(loginRequest).subscribe({
      next: (response) => {
        this.globalVarsService.setToken(response.token);
        this.globalVarsService.setUser(response.user);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        alert(error.error);
      },
    });
  }

  register(): void {
    const user: User = this.registerForm.value as unknown as User;

    this.authService.register(user).subscribe({
      next: (response) => {
        alert(response.message);

        const loginRequest: LoginRequest = {
          input: user.email,
          password: user.password,
        };

        this.loginRequestForm.patchValue(loginRequest as unknown as {});
        this.login();
      },
      error: (error) => {
        alert(error.error);
      },
    });
  }
}
