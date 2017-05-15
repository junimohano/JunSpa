import {
  Component, OnInit, ViewChild, ElementRef, AfterViewChecked,
  trigger, state, style, transition, animate, keyframes
} from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Auth } from '../shared/auth/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1.2)'
      })),
      state('active', style({
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('300ms 300ms ease-in')),
      transition('active => inactive', animate('300ms 300ms ease-out')),
    ]),

    trigger('movePanel', [
      // void => *
      transition('inactive => active', [
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translateX(200px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(25px)', offset: 0.75 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
        ])),
      ]),
      transition('active => inactive', [
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translateX(-200px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-25px)', offset: 0.75 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
        ])),
      ])
    ])
  ]
})
export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('chatDiv') private chatDiv: ElementRef;

  display = false;
  items: FirebaseListObservable<any>;
  name: any;
  msgVal = '';
  limit = 20;
  isScrollToBottom = true;
  isRefresh = false;

  state = 'inactive';

  constructor(private auth: Auth, private db: AngularFireDatabase) {
    this.getChat();

    // this.af.auth.subscribe(auth1 => {
    //   if (auth1) {
    //     this.name = auth1;
    //   }
    // });
  }

  getChat() {
    this.items = this.db.list('/messages', {
      query: {
        limitToLast: this.limit
      }
    });

    this.items.subscribe(() => {
      if (this.isRefresh === false) {
        this.isScrollToBottom = true;
      }
      this.isRefresh = false;
    });

  }

  onScroll(event) {
    if (event.srcElement.scrollTop === 0) {
      this.limit = this.limit + 5;
      this.getChat();
      this.isRefresh = true;
    }
    this.isScrollToBottom = false;
    // console.log(event.srcElement.scrollTop);
  }

  ngOnInit() { }

  ngAfterViewChecked(): void {
    if (this.isScrollToBottom) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    try {
      this.chatDiv.nativeElement.scrollTop = this.chatDiv.nativeElement.scrollHeight;
    } catch (err) { }
  }

  // login() {
  //   this.af.auth.login({
  //     provider: AuthProviders.Facebook,
  //     method: AuthMethods.Popup
  //   });
  // }

  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage, name: `${this.auth.userProfile.nickname}`, time: Date.now() });
    this.msgVal = '';
  }

  show() {
    this.display = !this.display;
    this.scrollToBottom();

    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }

}
