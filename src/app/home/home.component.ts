import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { INCREMENT, DECREMENT, RESET } from '../shared/counter';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  param = { value: 'world' };

  counter: Observable<number>;

  constructor(private store: Store<AppState>, private translate: TranslateService) {
    this.counter = store.select('counter');
  }

  ngOnInit() {

  }

  setLanguage(lang) {
    this.translate.use(lang);
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

}
