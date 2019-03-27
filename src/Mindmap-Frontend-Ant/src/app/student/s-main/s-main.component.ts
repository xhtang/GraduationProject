import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-main',
  templateUrl: './s-main.component.html',
  styleUrls: ['./s-main.component.css']
})
export class SMainComponent implements OnInit {

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
