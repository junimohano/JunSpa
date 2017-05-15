import { Component, OnInit } from '@angular/core';
import { Auth } from '../../auth/auth.service';
import { SelectItem } from 'primeng/primeng';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  languages: SelectItem[] = [];
  selectedLanguage = 'English';

  constructor(public auth: Auth, private translate: TranslateService) {
    this.languages.push({ label: 'English', value: 'en' });
    this.languages.push({ label: 'Korean', value: 'kr' });
  }

  ngOnInit() {
  }

  onLanguagesChange(event) {
    this.translate.use(event.value);
  }
}
