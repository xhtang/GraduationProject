import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMindmapComponent } from './s-mindmap.component';

describe('SMindmapComponent', () => {
  let component: SMindmapComponent;
  let fixture: ComponentFixture<SMindmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMindmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMindmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
