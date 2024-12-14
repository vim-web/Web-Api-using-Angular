import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllDetailsComponent } from './display-all-details.component';

describe('DisplayAllDetailsComponent', () => {
  let component: DisplayAllDetailsComponent;
  let fixture: ComponentFixture<DisplayAllDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayAllDetailsComponent]
    });
    fixture = TestBed.createComponent(DisplayAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
