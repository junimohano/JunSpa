import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../shared/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards: Board[];
  loading = true;

  constructor(private boardService: BoardService, private router: Router) { }

  ngOnInit() {
    this.boardService.getBoards()
      .subscribe(result => {
        this.boards = result;
        this.loading = false;
      }, error => alert(error));
  }

  selectBoard(id: number) {
    this.router.navigate(['/boards', 'detail'], { queryParams: { id: id } });
  }

  createBoard() {
    this.router.navigate(['/boards', 'detail']);
  }

}
