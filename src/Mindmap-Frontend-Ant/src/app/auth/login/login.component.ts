import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(
      private modal: NzModalRef,
      private userService: UserService,
      private modalService: NzModalService,
      private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // 检查输入
    if (!this.checkInputStatus()) {
      const inModal = this.modalService.info(
          {
            nzTitle: '请先填写登录信息',
            nzContent: '用户名或密码为空'
          });

      window.setTimeout(() => inModal.destroy(), 2000);

      return;
    }


    // 发送信息
    this.userService.login(this.user).subscribe(value => {
      if (value['success']) {
        this.storeUserInfo(); // 存储用户信息

        const inModal = this.modalService.success(
            {
              nzTitle: '登录成功',
              nzContent: '两秒钟后会自动跳转'
            });

        window.setTimeout(() => {
          inModal.destroy();
          this.destroyModal();

          if (this.user.identity === 'teacher') {
            this.router.navigate(['t']);
          } else if (this.user.identity === 'student') {
            this.router.navigate(['s']);
          }
        }, 2000);
      } else {
        const inModal = this.modalService.error(
            {
              nzTitle: '登录失败',
              nzContent: '用户名或密码错误'
            });
        window.setTimeout(() => inModal.destroy(), 2000);
      }
    });
  }

  checkInputStatus() {
    return this.user.user_name !== '' && this.user.user_pwd !== '';
  }

  storeUserInfo(): string {
    window.sessionStorage.setItem('user_name', this.user.user_name);
    window.sessionStorage.setItem('user_pwd', this.user.user_pwd);
    window.sessionStorage.setItem('identity', this.user.identity);
    window.sessionStorage.setItem('isLogin', 'isLogin');

    return this.user.identity;
  }

  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }
}
