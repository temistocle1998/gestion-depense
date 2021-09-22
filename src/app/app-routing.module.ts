import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieItemComponent } from './categorie/categorie-item/categorie-item.component';
import { CategorieViewComponent } from './categorie/categorie-view/categorie-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepenseItemComponent } from './depense/depense-item/depense-item.component';
import { DepenseViewComponent } from './depense/depense-view/depense-view.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RevenuComponent } from './revenu/revenu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'profile', component: UserProfileComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'add-depense', component: DepenseViewComponent},
  {path : 'depense', component: DepenseItemComponent},
  {path : 'dashboard', component: DashboardComponent},
  {path : 'header', component: HeaderComponent},
  {path : 'mes-revenus', component: HeaderComponent},
  {path : 'ajout-revenu', component: RevenuComponent},
  {path : 'categories', component: CategorieViewComponent},
  {path : 'add-categorie', component: CategorieItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
