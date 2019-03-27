import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TMindmapComponent } from './t-mindmap.component';

describe('TMindmapComponent', () => {
  let component: TMindmapComponent;
  let fixture: ComponentFixture<TMindmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TMindmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TMindmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
