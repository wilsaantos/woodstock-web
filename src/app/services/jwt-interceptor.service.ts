import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVarsService } from 'src/app/services/global-vars.service';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptorService implements HttpInterceptor {
  constructor(public globalVarsService: GlobalVarsService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.globalVarsService.getToken();
    
    if (token != null) {
      request = request.clone({
        setHeaders: {
          'X-Session-Data': token,
        },
      });
    }
    return next.handle(request);
  }
}
