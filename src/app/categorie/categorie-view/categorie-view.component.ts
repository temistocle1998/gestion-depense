import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-categorie-view',
  templateUrl: './categorie-view.component.html',
  styleUrls: ['./categorie-view.component.css']
})
export class CategorieViewComponent implements OnInit {

  UserProfile: User;
  Categories: any;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router
    ) {

      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
      this.authService.getAllCategorie().subscribe((data:any) => {
        this.Categories = data;
      })


  }
  ngOnInit(): void {
  }

}
