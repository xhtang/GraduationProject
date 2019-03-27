import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SNodeService} from '../s-node.service';
import {Link} from '../../link';

@Component({
  selector: 'app-s-resource',
  templateUrl: './s-resource.component.html',
  styleUrls: ['./s-resource.component.css']
})
export class SResourceComponent implements OnInit, OnChanges {

  @Input() course_id: string; // 与上层组件中course绑定
  @Input() mind_id: string; // 与上层组件中选中的mindMap绑定
  @Input() node_id: string;

  material_names: string[] = [];
  links: Link[];

  constructor(
    private nodeService: SNodeService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {

    this.updateMaterials();
    this.updateLinks();
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

  setLinkAddrs(value) {
    this.links = value;
  }

}
