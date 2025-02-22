import { inject, Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { User } from '../models/user.interface';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User> {

  private userService = inject(UserService);
  private router = inject(Router);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const userId = +route.paramMap.get('id')!;

    return this.userService.getUser(userId).pipe(
      catchError(error => {
        console.error("Error fetching user:", error);

        this.router.navigate(['/error']);
        return EMPTY;
      })
    );
  }
}
