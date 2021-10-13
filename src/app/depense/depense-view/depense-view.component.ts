import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import { Depense } from '../depense';
import Swal from 'sweetalert2';

class User {
  name:String;
  email:String
  }
@Component({
  selector: 'app-depense-view',
  templateUrl: './depense-view.component.html',
  styleUrls: ['./depense-view.component.css']
})

export class DepenseViewComponent implements OnInit {
  Depense: Depense;
  registerForm: FormGroup;
  errors = null;
  UserProfile: User;
  categories: any;

  constructor(public authService: AuthService, public tokenService: TokenService, public router: Router,public fb: FormBuilder
    ) {
      this.registerForm = this.fb.group({
        montant: [0],
        description: [''],
        categorie_id: [0]
      })
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
      this.authService.getAllCategorie().subscribe((data:any) => {
        this.categories = data
        console.log(this.categories)
      })

  }

  ngOnInit(): void {
  }



  onSubmit() {
    this.authService.addDepense(this.registerForm.value).subscribe(
      result => {
        console.log(result)
        this.simpleAlert()
      },
      error => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset()
      }
    )
  }

  simpleAlert(){
    Swal.fire("Depense ajouté", "Continuer !", "success");
    }

}
