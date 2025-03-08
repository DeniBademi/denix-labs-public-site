import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaAndAnomaliesComponent } from './qa-and-anomalies.component';

describe('QaAndAnomaliesComponent', () => {
  let component: QaAndAnomaliesComponent;
  let fixture: ComponentFixture<QaAndAnomaliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QaAndAnomaliesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaAndAnomaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
