import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser(id: number): Observable<User> {
    // Simulate API call
    const users: User[] = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com' }
    ];

    const user = users.find(u => u.id === id);

    return of(user!).pipe(
      delay(500)  // Simulate API call latency
    );
  }
}
