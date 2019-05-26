import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpuHeadComponent } from './bpu-head.component';

describe('BpuHeadComponent', () => {
  let component: BpuHeadComponent;
  let fixture: ComponentFixture<BpuHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpuHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpuHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
