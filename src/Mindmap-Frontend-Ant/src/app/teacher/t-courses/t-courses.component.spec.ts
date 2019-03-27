import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCoursesComponent } from './t-courses.component';

describe('TCoursesComponent', () => {
  let component: TCoursesComponent;
  let fixture: ComponentFixture<TCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
