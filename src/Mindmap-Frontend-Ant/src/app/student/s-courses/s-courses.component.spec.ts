import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCoursesComponent } from './s-courses.component';

describe('SCoursesComponent', () => {
  let component: SCoursesComponent;
  let fixture: ComponentFixture<SCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
