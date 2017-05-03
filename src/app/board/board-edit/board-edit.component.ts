import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ApiService } from "../../shared/services/api.service";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Message } from "primeng/primeng";
import { Auth } from "../../shared/auth/auth.service";

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css']
})
export class BoardEditComponent implements OnInit {

  msgs: Message[] = [];
  form: FormGroup;
  board: Board = {
    boardId: 0,
    userId: '',
    title: '',
    content: '',
    createdDate: null,
    updatedDate: null,
    comments: []
  };
  isNew = false;

  constructor(private auth: Auth, private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.form = this.fb.group({
      'title': ['', Validators.required],
      'content': ['', Validators.required]
      // 'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let id = params['id'];

      if (id == undefined) {
        this.isNew = true;
      } else {
        this.apiService.getBoard(id)
          .subscribe(result => {
            this.board = result;

            this.form.controls["title"].setValue(this.board.title);
            this.form.controls["content"].setValue(this.board.content);

          }, error => alert(error));
      }

    });
  }

  onSubmit(value: string) {

    this.board.userId = this.auth.userProfile.identities[0].user_id;
    this.board.title = this.form.controls["title"].value;
    this.board.content = this.form.controls["content"].value;

    if (this.isNew) {
      this.apiService.createBoard(this.board)
        .subscribe(result => {
          this.msgs = [];
          this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Board Added' });

          this.router.navigate(['/board']);

        }, error => alert(error));
    } else {
      this.apiService.updateBoard(this.board.boardId, this.board)
        .subscribe(result => {
          this.msgs = [];
          this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Board Updated' });

          this.router.navigate(['/board']);

        }, error => alert(error));
    }

  }

  deleteBoard() {
    this.apiService.deleteBoard(this.board.boardId)
      .subscribe(result => {
        this.router.navigate(['/board']);
      }, error => alert(error));
  }

}
