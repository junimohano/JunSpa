import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // data: string;
  data = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.getTest();
    const timer = Observable.timer(2000, 1000);
    timer.subscribe(() => this.data = this.data + 10);
  }

  // getTest() {
  //   this.apiService.getTest()
  //     .subscribe(result => {
  //       this.data = JSON.stringify(result);
  //     },
  //     error => alert(error),
  //     () => console.log('getTest done!!'));
  // }

}
