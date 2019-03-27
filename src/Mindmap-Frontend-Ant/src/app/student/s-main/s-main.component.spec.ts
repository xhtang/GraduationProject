import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMainComponent } from './s-main.component';

describe('SMainComponent', () => {
  let component: SMainComponent;
  let fixture: ComponentFixture<SMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
