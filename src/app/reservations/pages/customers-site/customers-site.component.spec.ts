import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSiteComponent } from './customers-site.component';

describe('CustomersSiteComponent', () => {
  let component: CustomersSiteComponent;
  let fixture: ComponentFixture<CustomersSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersSiteComponent]
    });
    fixture = TestBed.createComponent(CustomersSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
