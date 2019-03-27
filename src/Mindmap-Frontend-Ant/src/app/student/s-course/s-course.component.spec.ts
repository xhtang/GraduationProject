import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCourseComponent } from './s-course.component';

describe('SCourseComponent', () => {
  let component: SCourseComponent;
  let fixture: ComponentFixture<SCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
