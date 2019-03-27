import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TMainComponent } from './t-main.component';

describe('TMainComponent', () => {
  let component: TMainComponent;
  let fixture: ComponentFixture<TMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
