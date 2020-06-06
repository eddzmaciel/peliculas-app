import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieCardComponent } from './components/shared/movie-card/movie-card.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieCardComponent,
    MovieDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
