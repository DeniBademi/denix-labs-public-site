import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceagentsDemoComponent } from './voiceagents-demo.component';

describe('VoiceagentsDemoComponent', () => {
  let component: VoiceagentsDemoComponent;
  let fixture: ComponentFixture<VoiceagentsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceagentsDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceagentsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
