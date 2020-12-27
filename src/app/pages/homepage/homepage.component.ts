import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TokenService } from 'src/app/_services/token.service';

declare var $: any;

const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  email: string = '';
  validEmail: boolean = false;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  ngOnInit() {
  }

  onChangeEmail(e) {
    this.validEmail = (this.email.match(email)) ? true : false;
  }

  onSendEmail() {
    $.ajax({
      method: 'POST',
      url: 'http://127.0.0.1/send_mail.php',
      data: {
        'email': this.email,
        'token': this.tokenService.getToken()
      }
    }).then( success => console.log(success))
  }
}
