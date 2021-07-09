import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public cartItemCount: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.cartAmount)
      .subscribe((res) => (this.cartItemCount = res));
  }
}
