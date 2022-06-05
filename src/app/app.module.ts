import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { SliderComponent } from './components/slider/slider.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MyGamesComponent } from './pages/my-games/my-games.component';
import { NgxLoadingModule } from 'ngx-loading';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterGameComponent } from './pages/register-game/register-game.component';
import { AuthGuard } from './services/auth.guard';
import { GameComponent } from './components/game/game.component';
import { MatButtonModule } from '@angular/material/button';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgxInputStarRatingModule } from 'ngx-input-star-rating';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MyGamesComponent,
    RegisterGameComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    SlickCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
    NgxInputStarRatingModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
