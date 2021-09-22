import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/auth.interceptor';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterComponent } from './register/register.component';
import { DepenseViewComponent } from './depense/depense-view/depense-view.component';
import { DepenseItemComponent } from './depense/depense-item/depense-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { RevenuComponent } from './revenu/revenu.component';
import { CategorieViewComponent } from './categorie/categorie-view/categorie-view.component';
import { CategorieItemComponent } from './categorie/categorie-item/categorie-item.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    RegisterComponent,
    DepenseViewComponent,
    DepenseItemComponent,
    NavBarComponent,
    DashboardComponent,
    HeaderComponent,
    RevenuComponent,
    CategorieViewComponent,
    CategorieItemComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
