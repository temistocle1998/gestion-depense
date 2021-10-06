import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import { Depense } from '../depense';

@Component({
  selector: 'app-depense-item',
  templateUrl: './depense-item.component.html',
  styleUrls: ['./depense-item.component.css']
})
export class DepenseItemComponent implements OnInit {

  datas : any;
  UserProfile: User;

  // @Input() depense: Depense;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router) {
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
      this.authService.getAllDepenseByUser().subscribe((data:any) => {
        this.datas = data
        console.log(this.datas)
      })


  }
  ngOnInit(): void {
  }

}
