import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurExpertiseComponent } from './our-expertise.component';

describe('OurExpertiseComponent', () => {
  let component: OurExpertiseComponent;
  let fixture: ComponentFixture<OurExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurExpertiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
