import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.component.html',
  styleUrls: ['./revenu.component.css']
})
export class RevenuComponent implements OnInit {

  registerForm: FormGroup;
  errors = null;
  UserProfile: User;
  TypeRevenu: any;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router,public fb: FormBuilder
    ) {
      this.registerForm = this.fb.group({
        montant: [0],
        type_revenu_id: [''],
        categorie_id: [0]
      })
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
      this.authService.getTypeRevenu().subscribe((data:any) => {
        this.TypeRevenu = data;
      })


  }

  ngOnInit(): void {
  }



  onSubmit() {
    this.authService.AddRevenu(this.registerForm.value).subscribe(
      result => {
        console.log(result)
      },
      error => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset()
      }
    )
  }



}
