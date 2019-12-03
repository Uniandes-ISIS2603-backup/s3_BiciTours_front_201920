import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:
  [
    HeaderComponent,
    FooterComponent
  ]
})
export class ShareModule { }
