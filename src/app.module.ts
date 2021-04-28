import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import {
  GoogleRecaptchaModule,
  GoogleRecaptchaNetwork,
} from '@nestlab/google-recaptcha';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    GoogleRecaptchaModule.forRoot({
      secretKey: '6Lc_SL0aAAAAAPEsIlO4ntOjfU-BVKFuwAOwI4ZL',
      response: (req) => req.headers.authorization,
      network: GoogleRecaptchaNetwork.Recaptcha,
      agent: null,
    }),
    ConfigModule.forRoot({  isGlobal: true,
    }),
  ],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
