import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.scss']
})
export class SideNavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter();
  isLoggedIn = false;
  private alive = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authChange
      .pipe(takeWhile(() => this.alive))
      .subscribe(value => (this.isLoggedIn = value));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onNavClick() {
    this.closeSidenav.emit();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
