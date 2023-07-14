import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNextStepComponent } from './register-next-step.component';

describe('RegisterNextStepComponent', () => {
  let component: RegisterNextStepComponent;
  let fixture: ComponentFixture<RegisterNextStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterNextStepComponent]
    });
    fixture = TestBed.createComponent(RegisterNextStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
