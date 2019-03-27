import {Component, Input, OnChanges, OnInit} from '@angular/core';

import { SNodeService } from '../s-node.service';
import { NzModalService } from 'ng-zorro-antd';
import { StuMultiple } from '../stu-multiple';
import { StuJudge } from '../stu-judge';
import { StuShort } from '../stu-short';

@Component({
  selector: 'app-s-homework',
  templateUrl: './s-homework.component.html',
  styleUrls: ['./s-homework.component.css']
})
export class SHomeworkComponent implements OnInit, OnChanges {

  stuMultiples: StuMultiple[];
  stuShorts: StuShort[];
  stuJudges: StuJudge[];

  @Input() course_id: string; // 与上层组件中course绑定
  @Input() mind_id: string; // 与上层组件中选中的mindMap绑定
  @Input() node_id: string;

  constructor(
    private nodeService: SNodeService,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.updateHomework();
  }

  updateHomework() {
    // 获取所有的选择题
    this.nodeService.getStuMultiple(
      this.course_id,
      this.mind_id,
      this.node_id,
      window.sessionStorage.getItem('user_name')).subscribe(
      value => this.setMultiple(value));

    // 获取所有的简答题
    this.nodeService.getShort(
      this.course_id,
      this.mind_id,
      this.node_id,
      window.sessionStorage.getItem('user_name')).subscribe(
      value => this.setShort(value));

    // 获取所有的选择题
    this.nodeService.getStuJudge(
      this.course_id,
      this.mind_id,
      this.node_id,
      window.sessionStorage.getItem('user_name')).subscribe(
      value => this.setJudge(value));
  }

  setMultiple(value) {
    this.stuMultiples = value;
    for (const stuMultiple of this.stuMultiples) {
      if (stuMultiple.answer !== '') {

        stuMultiple.submitted = true;
      }
    }
  }

  setShort(value) {
    this.stuShorts = value;
    for (const stuShort of this.stuShorts) {
      if (stuShort.answer !== '') {
        stuShort.submitted = true;
      }
    }
  }

  setJudge(value) {
    this.stuJudges = value;
    for (const stuJudge of this.stuJudges) {
      if (stuJudge.answer !== '') {
        stuJudge.submitted = true;
      }
    }
  }

  // 提交选择题
  submitMultiple(stuMultiple: StuMultiple) {
    this.nodeService.answerMultiple(
      this.course_id,
      this.mind_id,
      this.node_id,
      window.sessionStorage.getItem('user_name'),
      stuMultiple).subscribe(
      value => {
        this.checkSubmit(value['success']);
        stuMultiple.submitted = true;
      });
  }

  // 提交简答题
  submitShort(stuShort: StuShort) {
    this.nodeService.answerShort(
      this.course_id,
      this.mind_id,
      this.node_id,
      window.sessionStorage.getItem('user_name'),
      stuShort).subscribe(
        value => {
          this.checkSubmit(value['success']);
          stuShort.submitted = true;
        }
    );
  }

  // 提交判断题
  submitJudge(stuJudge: StuJudge) {
    this.nodeService.answerJudge(
      this.course_id,
      this.mind_id,
      this.node_id,
      window.sessionStorage.getItem('user_name'),
      stuJudge).subscribe(
      value => {
        this.checkSubmit(value['success']);
        stuJudge.submitted = true;
      });
  }

  // 检查提交
  checkSubmit(value) {
    if (value) {
      const inModal = this.modalService.success(
        {
          nzTitle: '提交成功',
          nzContent: '已保存答案'
        });
      window.setTimeout(() => {
        inModal.destroy();
      }, 2000);
    } else {
      const inModal = this.modalService.error(
        {
          nzTitle: '提交失败',
          nzContent: '未知错误'
        });
      window.setTimeout(() => {
        inModal.destroy();
      }, 2000);
    }
  }

  // 查看正确答案
  checkAnswer(id: string, type: number) {
    this.nodeService.get_real_answer(
      id,
      type,
      window.sessionStorage.getItem('user_name')
    ).subscribe(
      // todo 显示答案
      r => {
        this.modalService.info(
          {
            nzTitle: '参考答案为：',
            nzContent: type === 3 ? (r['answer'] === 'T' ? '正确' : '错误') : r['answer']
          }
        );
      }
    );
  }

}
