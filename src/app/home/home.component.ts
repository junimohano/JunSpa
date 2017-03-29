import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: string;
  id: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.id = localStorage.getItem('id_token');
  }

  test() {
    this.apiService.getTest()
      .subscribe(
      data => this.data = JSON.stringify(data),
      error => this.data = error._body || error
      );
  }

}
