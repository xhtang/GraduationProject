import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SResourceComponent } from './s-resource.component';

describe('SResourceComponent', () => {
  let component: SResourceComponent;
  let fixture: ComponentFixture<SResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
