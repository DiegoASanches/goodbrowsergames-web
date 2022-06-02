import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameService } from './game.service';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private gameService: GameService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const projectID = route.params.projectId;
    return this.gameService.getTrending().pipe(
        map(result => {
            return true;
        })
    );
  }
}
