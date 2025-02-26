import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { routes } from './app-routes';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav nav-pills">
    <li><a class="nav-link" routerLink="/welcome" routerLinkActive="active">Home</a></li>
    <li><a class="nav-link" routerLink="/products" routerLinkActive="active">Product List</a></li>
  </ul>
    </nav>
  <div class="container">
  <router-outlet />
</div>
  `,
})
export class App {
  pageTitle = 'Angular: Getting Started';
}

bootstrapApplication(App, { providers: [provideRouter(routes)] });
