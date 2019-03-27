import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SNodeService} from '../s-node.service';
import {environment} from '../../../environments/environment';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-s-courseware',
  templateUrl: './s-courseware.component.html',
  styleUrls: ['./s-courseware.component.css']
})
export class SCoursewareComponent implements OnInit, OnChanges {

  @Input() course_id: string; // 与上层组件中course绑定
  @Input() mind_id: string; // 与上层组件中选中的mindMap绑定
  @Input() node_id: string;

  courseware_names: string[] = [];
  pdf_names: string[];
  mp4_names: string[];

  pdf_url = ''; // 课件资源的地址
  totalPages: number;
  page = 1; // 课件预览的页码

  mp4_url = '';


  constructor(
    private nodeService: SNodeService,
    private msg: NzMessageService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.updateCoursewares();
  }

  updateCoursewares() {
    this.nodeService.getCoursewares(this.course_id, this.mind_id, this.node_id).subscribe(r => {
      this.courseware_names = r;
      this.pdf_names = r.filter(w => w.endsWith('.pdf'));
      this.mp4_names = r.filter(w => w.endsWith('.mp4'));
    });
  }

  download(file_name: string) {
    this.nodeService.requestCoursewareBlob(
      this.course_id, this.mind_id, this.node_id, file_name).subscribe(r => {

      this.nodeService.downFile(r, file_name);
    });
  }

  loadPdf(file_name: string) {
    const apiUrl =  environment.apiUrl;
    this.pdf_url = `${apiUrl}view_courseware/${this.course_id}/${this.mind_id}/${this.node_id}/${file_name}`;
    this.page = 1;
    this.msg.info('请在资源列表下方查看');
  }

  loadMp4(file_name: string) {
    const apiUrl =  environment.apiUrl;
    this.mp4_url = `${apiUrl}view_courseware/${this.course_id}/${this.mind_id}/${this.node_id}/${file_name}`;
    this.msg.info('请在下方查看');
  }

  // pdf加载完成之后
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
  }


}
