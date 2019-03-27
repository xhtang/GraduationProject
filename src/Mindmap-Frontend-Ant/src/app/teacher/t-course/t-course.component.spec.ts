import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCourseComponent } from './t-course.component';

describe('TCourseComponent', () => {
  let component: TCourseComponent;
  let fixture: ComponentFixture<TCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
