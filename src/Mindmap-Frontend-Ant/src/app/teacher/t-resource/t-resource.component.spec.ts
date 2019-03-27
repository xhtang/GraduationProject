import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TResourceComponent } from './t-resource.component';

describe('TResourceComponent', () => {
  let component: TResourceComponent;
  let fixture: ComponentFixture<TResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
