import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCoursewareComponent } from './t-courseware.component';

describe('TCoursewareComponent', () => {
  let component: TCoursewareComponent;
  let fixture: ComponentFixture<TCoursewareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCoursewareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCoursewareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
