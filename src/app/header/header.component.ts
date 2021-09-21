import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  UserProfile: User;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router) {
    if (this.tokenService.isLoggedIn()) {
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
    }
    else
      this.router.navigate(['login']);

  }
  ngOnInit(): void {
  }

}
