import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideToolBarComponent } from './component/side-tool-bar/side-tool-bar.component';
import { TopToolBarComponent } from './component/top-tool-bar/top-tool-bar.component';
import { MainViewCentreComponent } from './component/main-view-centre/main-view-centre.component';
import { VideosPageComponent } from './component/videos-page/videos-page.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { RightSideToolbarComponent } from './component/right-side-toolbar/right-side-toolbar.component';
import { MemePageComponent } from './component/meme-page/meme-page.component';
import { RandomFoodDishesPageComponent } from './component/random-food-dishes-page/random-food-dishes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideToolBarComponent,
    TopToolBarComponent,
    MainViewCentreComponent,
    VideosPageComponent,
    LandingPageComponent,
    RightSideToolbarComponent,
    MemePageComponent,
    RandomFoodDishesPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
