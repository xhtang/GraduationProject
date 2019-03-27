import { Component, Input, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { TNodeService } from '../t-node.service';
import { environment } from '../../../environments/environment';
import { NzMessageService, NzModalRef, NzModalService, UploadFile, UploadFilter } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';
import { Link} from '../../link';

@Component({
  selector: 'app-t-resource',
  templateUrl: './t-resource.component.html',
  styleUrls: ['./t-resource.component.css']
})
export class TResourceComponent implements OnInit, OnChanges {

  uploadUrl = '';

  @Input() course_id: string; // 与上层组件中course绑定
  @Input() mind_id: string; // 与上层组件中选中的mindMap绑定
  @Input() node_id: string;

  resourceList = [];

  material_names: string[] = [];
  links: Link[];
  link: Link = new Link();

  tplModal: NzModalRef;

  // tslint:disable-next-line:typedef
  handleChange({ file, fileList }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} 文件上传成功`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} 文件上传失败`);
    }
    this.updateResources();
  }

  constructor(
    private nodeService: TNodeService,
    private http: HttpClient,
    private msg: NzMessageService,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.uploadUrl = environment.apiUrl + 'upload_material/'
      + this.course_id + '/' + this.mind_id + '/' + this.node_id + '/';

    this.updateMaterials();
    this.updateLinks();

    this.resourceList = [];
  }

  updateMaterials() {
    this.nodeService.getMaterials(this.course_id, this.mind_id, this.node_id).subscribe(r => {
      this.material_names = r;
    });
  }

  download(file_name: string) {
    this.nodeService.requestMaterialBlob(
      this.course_id, this.mind_id, this.node_id, file_name).subscribe(r => {

      this.nodeService.downFile(r, file_name);
    });
  }

  updateLinks() {
    this.nodeService.getLinks(
      this.course_id,
      this.mind_id,
      this.node_id).subscribe(
      value => this.setLinkAddrs(value));
  }

  updateResources() {
    this.updateLinks();
    this.updateMaterials();
  }

  setLinkAddrs(value) {
    this.links = value;
  }

  openLinkModal(
    tplTitle: TemplateRef<{}>,
    tplContent: TemplateRef<{}>,
    tplFooter: TemplateRef<{}>
  ) {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false
    });
  }

  uploadLink() {
    this.nodeService.upload_link(
      this.course_id,
      this.mind_id,
      this.node_id,
      this.link).subscribe(
      value => {
        this.checkLink(value['success']);
        this.tplModal.destroy();
      });
  }

  checkLink(value) {
    if (value) {
      this.updateLinks();
      this.msg.success('上传成功');
      this.link = new Link();
    }
  }

  removeMaterial(material_name) {
    this.nodeService.removeMaterial(this.course_id, this.mind_id, this.node_id, material_name).subscribe(
      r => {
        if (r['success']) {
          this.msg.success(`资源 ${material_name} 移除成功`);
        } else {
          this.msg.error(`资源 ${material_name} 移除失败`);
        }

        this.updateMaterials();
      }
    );
  }

  removeLink(link_name: string, nodeId: string) {
    this.nodeService.removeLink(link_name, nodeId).subscribe(
      r => {
        if (r['success']) {
          this.msg.success(`资源 ${link_name} 移除成功`);
        } else {
          this.msg.error(`资源 ${link_name} 移除失败`);
        }

        this.updateLinks();
      }
    );
  }

}
