import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="user-card-container">
      <nav>
        <a [routerLink]="['/users', 1]">User 1</a> | 
        <a [routerLink]="['/users', 2]">User 2</a> | 
        <a [routerLink]="['/users', 3]">User 3</a> 
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-resolverApp';
}
