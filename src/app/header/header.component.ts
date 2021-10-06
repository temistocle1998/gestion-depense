import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from '../shared/auth-state.service';
import { AuthService, User } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  UserProfile: User;

  constructor(public authService: AuthService, public tokenService: TokenService,private auth: AuthStateService,public router: Router) {
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })


  }
  ngOnInit(): void {
  }


  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.tokenService.removeToken();
    this.router.navigate(['login']);
  }

}
