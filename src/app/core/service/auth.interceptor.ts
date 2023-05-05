import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const authReq=request.clone({
      headers: request.headers.set('Access-Control-Allow-Origin', 'http://localhost:59070')
    })
    return next.handle(authReq);
  }
}
