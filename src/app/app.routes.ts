import { Routes } from '@angular/router';
import { UserResolver } from './resolvers/user.resolver';
import { UserProfileComponent } from './ui/user-profile/user-profile.component';
import { ErrorComponent } from './ui/error/error.component';

export const routes: Routes = [
  {
    path: 'users/:id',
    component: UserProfileComponent,
    resolve: {
      user: UserResolver,
    },
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**', // Wildcard route for handling invalid URLs
    redirectTo: 'users/1', // Redirect to a default user or another appropriate route
  },
];
