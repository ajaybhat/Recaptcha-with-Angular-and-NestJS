import { GoogleRecaptchaException } from '@nestlab/google-recaptcha';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch(GoogleRecaptchaException)
export class GoogleRecaptchaFilter implements ExceptionFilter {
  catch(exception: GoogleRecaptchaException, host: ArgumentsHost): any {
    console.log('Exception encountered', exception.errorCodes)
  }
}
