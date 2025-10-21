import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceagentsSectionComponent } from './voiceagents-section.component';

describe('VoiceagentsSectionComponent', () => {
  let component: VoiceagentsSectionComponent;
  let fixture: ComponentFixture<VoiceagentsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceagentsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceagentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
