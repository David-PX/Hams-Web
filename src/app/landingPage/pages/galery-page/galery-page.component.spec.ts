import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryPageComponent } from './galery-page.component';

describe('GaleryPageComponent', () => {
  let component: GaleryPageComponent;
  let fixture: ComponentFixture<GaleryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleryPageComponent]
    });
    fixture = TestBed.createComponent(GaleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
