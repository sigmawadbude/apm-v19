import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  template: `
  <div class="card">
  <div class="card-header">
    {{pageTitle}}
  </div>
  <div class="card-body">
    <div class="container-fluid">

      <div class="text-center">Developed by:</div>
      <div class="text-center">
        <h3>Deborah Kurata</h3>
      </div>

      <div class="text-center">deborahkurata</div>
      <div class="text-center">
        <a href="http://www.bit.ly/DeborahKsBlog">www.bit.ly/DeborahKsBlog</a>
      </div>
    </div>
  </div>
</div>
  `,
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
}
