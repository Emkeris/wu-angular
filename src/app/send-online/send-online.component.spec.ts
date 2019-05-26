import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOnlineComponent } from './send-online.component';

describe('SendOnlineComponent', () => {
  let component: SendOnlineComponent;
  let fixture: ComponentFixture<SendOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
