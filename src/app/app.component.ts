/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import './shared/rxjs-operators';
import { AppState } from './app.service';
import { Router } from '@angular/router';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public counter: number = 0;

  constructor(
    public appState: AppState,
    private router: Router
  ) {}

  public goToHome() {
    this.router.navigate(['/home']);
  }

  public ngOnInit() {
  }

  public count() {
    this.counter++;
    console.log(this.counter);
  }
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
