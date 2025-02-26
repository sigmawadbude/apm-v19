import { Routes } from '@angular/router';
import { WelcomeComponent } from './app/home/welcome/welcome.component';
import { PageNotFountComponent } from './page-not-fount.component';
import { ProductListComponent } from './app/products/product-list.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFountComponent },
];
