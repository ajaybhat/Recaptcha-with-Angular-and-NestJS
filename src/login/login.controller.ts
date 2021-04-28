import { Controller, Get, HttpException, HttpStatus, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Recaptcha } from '@nestlab/google-recaptcha';

@Controller('login')
export class LoginController {
  @Recaptcha()
  @Post('/')
  login(@Req() request: Request): any {
    const body = request.body;
    if (body['username'] != 'admin' || body['password'] !== 'admin') {
      throw new HttpException({ 'message': 'Invalid Input' }, HttpStatus.BAD_REQUEST);
    }

    return { message: 'You\'ve logged in!' };
  }

  @Recaptcha()
  @Get()
  getLogin(): any {
    return { message: 'You are not logged in!' };
  }
}
