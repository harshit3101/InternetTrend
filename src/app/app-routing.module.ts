import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MemePageComponent } from './component/meme-page/meme-page.component';
import { RandomFoodDishesPageComponent } from './component/random-food-dishes-page/random-food-dishes-page.component';
import { VideosPageComponent } from './component/videos-page/videos-page.component';

const routes: Routes = [
  { path: 'videos', component: VideosPageComponent },
  { path: 'memes', component: MemePageComponent },
  { path: 'foodDishesPictures', component: RandomFoodDishesPageComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
