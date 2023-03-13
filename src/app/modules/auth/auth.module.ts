import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [SignInPage],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
