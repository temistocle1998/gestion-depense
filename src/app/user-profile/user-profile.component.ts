import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';

class User {
  name:String;
  email:String
}

class Depense {
  montant:String
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  UserProfile: User;
  CurrentDepense: Depense;
  TotalDepense: Depense;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router) {
    if (this.tokenService.isLoggedIn()) {
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
      this.authService.currentDepense().subscribe((data:any) => {
        this.CurrentDepense = data
        console.log(this.CurrentDepense)
      })
      this.authService.getTotalDepense().subscribe((data:any) => {
        this.TotalDepense = data
        console.log(this.TotalDepense)
      })
    }
    else
      this.router.navigate(['login']);

  }


  ngOnInit() {
  }

}
