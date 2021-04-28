import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Recaptcha } from '@nestlab/google-recaptcha';

@Controller('login')
export class LoginController {

  @Recaptcha()
  @Post('/')
  login(@Req() request: Request): string {
    console.log(request.body);
    return 'This action posts all cats';
  }

  @Recaptcha()
  @Get()
  getLogin(): string {
    return 'This action get all cats';
  }
}
