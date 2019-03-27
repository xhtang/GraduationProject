import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SHomeworkComponent } from './s-homework.component';

describe('SHomeworkComponent', () => {
  let component: SHomeworkComponent;
  let fixture: ComponentFixture<SHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
