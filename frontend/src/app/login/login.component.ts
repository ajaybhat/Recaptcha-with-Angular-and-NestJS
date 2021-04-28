import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title = 'Login';
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  @Input()
  error = '';
  @Output() errorChange = new EventEmitter<string>();

  @Output()
  loginOutput = new EventEmitter<any>();

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    @Inject(Router) private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  public submit(): void {
    this.recaptchaV3Service.execute('submit').subscribe((token) => {
      this.loginOutput.emit({ token, body: this.form.value });
    });
  }
}
