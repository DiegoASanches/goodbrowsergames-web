import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private loginService: LoginService,
    ) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const allowedUrls = [
            `${environment.apiEndpoint}/login`,
            `${environment.apiEndpoint}/user`,
        ];
        const token = this.loginService.getToken();
        if (!token || allowedUrls.includes(req.url)) {
            return next.handle(req);
        }
        const dupReq = req.clone({
            headers: req.headers.set(`x-access-token`,  token),
        });
        return next.handle(dupReq);
    }
}
