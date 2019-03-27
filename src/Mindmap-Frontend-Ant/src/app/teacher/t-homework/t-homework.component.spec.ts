import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { THomeworkComponent } from './t-homework.component';

describe('THomeworkComponent', () => {
  let component: THomeworkComponent;
  let fixture: ComponentFixture<THomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ THomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(THomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
