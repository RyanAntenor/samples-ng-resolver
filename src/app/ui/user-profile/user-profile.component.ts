import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.interface';

@Component({
  imports: [CommonModule],
  template: `
   <div *ngIf="user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
    <div *ngIf="!user">
        <p>User not found</p>
    </div>
  `,
})
export class UserProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);
  user: User | undefined;

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }
}
