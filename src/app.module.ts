import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import {
  GoogleRecaptchaModule,
  GoogleRecaptchaNetwork,
} from '@nestlab/google-recaptcha';

@Module({
  imports: [
    GoogleRecaptchaModule.forRoot({
      secretKey: '6LdGGbwaAAAAAOTxm9iOQq3f2Tc2UHObC47N6MuK',
      response: (req) => req.headers.recaptcha,
      //skipIf: process.env.NODE_ENV !== 'production',
      network: GoogleRecaptchaNetwork.Recaptcha,
      agent: null,
    }),
  ],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
