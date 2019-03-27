import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCoursewareComponent } from './s-courseware.component';

describe('SCoursewareComponent', () => {
  let component: SCoursewareComponent;
  let fixture: ComponentFixture<SCoursewareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCoursewareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCoursewareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
