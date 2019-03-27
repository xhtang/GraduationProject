import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzModalService } from 'ng-zorro-antd';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../user.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  isLogin = '';

  constructor(
      private modalService: NzModalService,
      private userService: UserService,
      private router: Router
  ) { }

  ngOnInit() {
    this.isLogin = sessionStorage.getItem('isLogin');
  }

  createLoginModal(): void {
    const modal = this.modalService.create({
      nzTitle: '登录',
      nzContent: LoginComponent,
      nzFooter: [
        {
          label: '提交',
          type: 'primary',
          onClick: (componentInstance) => componentInstance.onSubmit()
        },
        {
          label: '取消',
          onClick: () => {
            modal.destroy();
          }
        }
      ],
      nzMaskClosable: false
    });
  }

  createRegisterModal(): void {
    const modal = this.modalService.create({
      nzTitle: '注册',
      nzContent: RegisterComponent,
      nzFooter: null,
      nzMaskClosable: false
    });
  }

  enterCourses() {
    if (this.isLogin !== '') {
      const identity = sessionStorage.getItem('identity');
      if (identity === 'teacher') {
        this.router.navigate(['t']);
      } else if (identity === 'student') {
        this.router.navigate(['s']);
      } else {
        console.log('error in main-page');
      }
    }
  }
}
