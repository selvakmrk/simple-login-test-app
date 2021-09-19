import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './components/login/login.module';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    FormsModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
