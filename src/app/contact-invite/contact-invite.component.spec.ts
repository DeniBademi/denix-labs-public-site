import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInviteComponent } from './contact-invite.component';

describe('ContactInviteComponent', () => {
  let component: ContactInviteComponent;
  let fixture: ComponentFixture<ContactInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInviteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
