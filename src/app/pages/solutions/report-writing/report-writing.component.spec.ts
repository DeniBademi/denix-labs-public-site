import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWritingComponent } from './report-writing.component';

describe('ReportWritingComponent', () => {
  let component: ReportWritingComponent;
  let fixture: ComponentFixture<ReportWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportWritingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
