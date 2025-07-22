import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriptionModalComponent } from './subscription-modal.component';

describe('SubscriptionModalComponent', () => {
  let component: SubscriptionModalComponent;
  let fixture: ComponentFixture<SubscriptionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closeModal when onClose is called', () => {
    spyOn(component.closeModal, 'emit');
    component.onClose();
    expect(component.closeModal.emit).toHaveBeenCalled();
  });

  it('should validate email correctly', () => {
    expect(component['validateEmail']('test@example.com')).toBe(true);
    expect(component['validateEmail']('invalid-email')).toBe(false);
    expect(component['validateEmail']('')).toBe(false);
  });

  it('should emit subscribe with email when valid email is submitted', () => {
    spyOn(component.subscribe, 'emit');
    component.email = 'test@example.com';
    component.onSubmit();
    expect(component.subscribe.emit).toHaveBeenCalledWith('test@example.com');
  });
});