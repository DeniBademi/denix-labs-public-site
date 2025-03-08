import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticCustomerSupportComponent } from './automatic-customer-support.component';

describe('AutomaticCustomerSupportComponent', () => {
  let component: AutomaticCustomerSupportComponent;
  let fixture: ComponentFixture<AutomaticCustomerSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomaticCustomerSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomaticCustomerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
