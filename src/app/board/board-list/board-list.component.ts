import { Component, OnInit } from '@angular/core';
import { ApiService } from "app/shared/services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  boards: Board[];
  loading: boolean = true;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getBoards()
      .subscribe(result => {
        this.boards = result;
        this.loading = false;
      }, error => alert(error));
  }

  selectBoard(id: number) {
    this.router.navigate(['/board', 'edit'], { queryParams: { id: id } });
  }

  createBoard() {
    this.router.navigate(['/board', 'edit']);
  }

}
