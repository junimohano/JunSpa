import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  param = { value: 'world' };

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  setLanguage(lang) {
    this.translate.use(lang);
  }

}
