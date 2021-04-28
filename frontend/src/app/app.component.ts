import { Component } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn = false;
  error = '';

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private httpService: HttpService,
  ) {
  }

  private sendLoginRequest(loginOutput: any) {
    this.error = '';

    this.httpService.login(loginOutput.body, loginOutput.token).subscribe(
      (response) => {
        window.localStorage.setItem('Authorization', loginOutput.token);
        this.isLoggedIn = true;
      },
      (error) => {
        this.error = error.error.message;
      },
    );
  }
}
