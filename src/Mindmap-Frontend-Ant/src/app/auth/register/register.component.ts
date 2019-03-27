import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { UserService } from '../user.service';
import { RegisterUser } from '../register-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: RegisterUser = new RegisterUser();
  confirmedPwd = '';
  inputStatus = [false, true]; // 检查输入状态，第一个表示所有空都填了，第二个表示两个密码一致

  next = false; // 标识在输入信息阶段还是在验证码阶段

  isChecking = false; // 正在后台验证注册码

  constructor(
      private modal: NzModalRef,
      private userService: UserService,
      private modalService: NzModalService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  // 切换到注册码状态
  // gotoNext() {
  //   this.checkInputStatus();
  //
  //   if (!this.inputStatus[0]) {
  //     const inModal = this.modalService.warning(
  //         {
  //           nzTitle: '请先填写注册信息',
  //           nzContent: '用户名或密码为空'
  //         });
  //
  //     window.setTimeout(() => inModal.destroy(), 2000);
  //     return;
  //   }
  //
  //   if (!this.inputStatus[1]) {
  //     const inModal = this.modalService.warning(
  //         {
  //           nzTitle: '请检查输入',
  //           nzContent: '两次密码不一致'
  //         });
  //
  //     window.setTimeout(() => inModal.destroy(), 2000);
  //     return;
  //   }
  //
  //   this.next = true;
  // }
  //
  // goBack() {
  //   this.next = false;
  // }

  // 检查注册信息的填写
  checkInputStatus(): void {
    this.inputStatus[0] = true;
    this.inputStatus[1] = true;

    if (this.user.user_name === ''
        || this.user.user_pwd === ''
        || this.confirmedPwd === '') {
      this.inputStatus[0] = false;
    }

    if (this.user.user_pwd !== this.confirmedPwd) {
      this.inputStatus[1] = false;
    }
  }

  // 发送注册码
  // sendCode() {
  //   if (this.user.email === '') {
  //     const inModal = this.modalService.warning(
  //         {
  //           nzTitle: '请先填写注册邮箱',
  //           nzContent: '注册邮箱为空'
  //         });
  //
  //     window.setTimeout(() => inModal.destroy(), 2000);
  //     return;
  //   }
  //
  //   this.isChecking = true;
  //   this.userService.sendCode(this.user)
  //       .subscribe((value => this.checkCodeStatus(value['success'])));
  // }


  // 返回验证码发送状态
  checkCodeStatus(value) {
    if (value) {
      const inModal = this.modalService.info(
          {
            nzTitle: '验证码发送成功',
            nzContent: '请检查邮件填写验证码'
          });

      window.setTimeout(() => inModal.destroy(), 2000);
    } else {
      const inModal = this.modalService.error(
          {
            nzTitle: '注册信息有误',
            nzContent: '用户名或邮箱重复'
          });

      window.setTimeout(() => inModal.destroy(), 2000);
    }

    this.isChecking = false;
  }

  // 提交验证码
  // onSubmit() {
  //   this.userService.register(this.user)
  //       .subscribe(value => {
  //         if (value['success']) {
  //           this.storeUserInfo(); // 存储用户信息
  //
  //           const inModal = this.modalService.success(
  //               {
  //                 nzTitle: '注册成功',
  //                 nzContent: '两秒钟后会自动跳转'
  //               });
  //
  //           window.setTimeout(() => {
  //             inModal.destroy();
  //             this.destroyModal();
  //
  //             if (this.user.identity === 'teacher') {
  //               this.router.navigate(['t']);
  //             } else if (this.user.identity === 'student') {
  //               this.router.navigate(['s']);
  //             }
  //           }, 2000);
  //         } else {
  //           const inModal = this.modalService.error(
  //               {
  //                 nzTitle: '注册失败',
  //                 nzContent: '注册信息有误'
  //               });
  //           window.setTimeout(() => inModal.destroy(), 2000);
  //         }
  //
  //       });
  // }

  // 在内存中存储登录状态
  storeUserInfo() {
    window.sessionStorage.setItem('user_name', this.user.user_name);
    window.sessionStorage.setItem('user_pwd', this.user.user_pwd);
    window.sessionStorage.setItem('identity', this.user.identity);
    window.sessionStorage.setItem('isLogin', 'isLogin');

  }

  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }

  goBack() {
    this.next = false;
  }

  registerRightNow() {
    this.checkInputStatus();

    if (!this.inputStatus[0]) {
      const inModal = this.modalService.warning(
        {
          nzTitle: '请先填写注册信息',
          nzContent: '用户名或密码为空'
        });

      window.setTimeout(() => inModal.destroy(), 2000);
      return;
    }

    if (!this.inputStatus[1]) {
      const inModal = this.modalService.warning(
        {
          nzTitle: '请检查输入',
          nzContent: '两次密码不一致'
        });

      window.setTimeout(() => inModal.destroy(), 2000);
      return;
    }

    this.userService.register(this.user)
      .subscribe(value => {
        if (value['success']) {
          this.storeUserInfo(); // 存储用户信息

          const inModal = this.modalService.success(
            {
              nzTitle: '注册成功',
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
              nzTitle: '注册失败',
              nzContent: '注册信息有误'
            });
          window.setTimeout(() => inModal.destroy(), 2000);
        }

      });
  }



}
