import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VapiSectionComponent } from './vapi-section.component';

describe('VapiSectionComponent', () => {
  let component: VapiSectionComponent;
  let fixture: ComponentFixture<VapiSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VapiSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VapiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
