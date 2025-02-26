import { Routes } from '@angular/router';
import { WelcomeComponent } from './app/home/welcome/welcome.component';
import { PageNotFountComponent } from './page-not-fount.component';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFountComponent },
];
