import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutMe } from './pages/about-me/about-me';

export const routes: Routes = [
  { path: 'homePage', component: HomePage },
{ path: '', redirectTo: 'homePage', pathMatch: 'full' },
 { path: 'aboutMe', component: AboutMe },
];