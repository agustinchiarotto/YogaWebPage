
import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   private user: SocialUser;
   private loggedIn: boolean;

  constructor(private authService: AuthService) { }
 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
 /*  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }  */
 
  signOut(): void {
    this.authService.signOut();
  }
  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
    });
  }

}