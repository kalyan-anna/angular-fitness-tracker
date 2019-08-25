import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sideNavToggle = new EventEmitter<void>();
  isLoggedIn = false;
  private alive = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authChange
      .pipe(takeWhile(() => this.alive))
      .subscribe(value => (this.isLoggedIn = value));
  }

  onToggleSideNav() {
    this.sideNavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
