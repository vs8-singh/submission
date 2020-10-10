import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
// import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "ng4-social-login";

// const config = new AuthServiceConfig([
//   {
//     id:GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('605317544181-afa82speanoced76ua4isikkitj8d037.apps.googleusercontent.com') 
//   },
//   {id: FacebookLoginProvider.PROVIDER_ID,
//   provider: new FacebookLoginProvider('635549967163283')
// }
// ],false);

// export function provideConfig(){
//   return config;
// }
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
     SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // SocialLoginModule
  ],
  providers: [
    // {
    // provide: AuthServiceConfig, 
    // useFactory: provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
