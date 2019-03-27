import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-t-main',
  templateUrl: './t-main.component.html',
  styleUrls: ['./t-main.component.css']
})
export class TMainComponent implements OnInit {

  username = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = window.sessionStorage.getItem('user_name');
  }

  logOut() {
    window.sessionStorage.clear();
    this.router.navigate(['main']);
  }

}
