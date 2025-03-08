import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUseAiComponent } from './why-use-ai.component';

describe('WhyUseAiComponent', () => {
  let component: WhyUseAiComponent;
  let fixture: ComponentFixture<WhyUseAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUseAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyUseAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
