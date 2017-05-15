import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    // if (this.router.url === '/boards') {
    //   this.router.navigate(['/boards', 'list']);
    // }
  }

}
