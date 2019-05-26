import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentAgentComponent } from './sent-agent.component';

describe('SentAgentComponent', () => {
  let component: SentAgentComponent;
  let fixture: ComponentFixture<SentAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
