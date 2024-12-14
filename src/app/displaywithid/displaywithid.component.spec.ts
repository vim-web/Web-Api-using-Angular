import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaywithidComponent } from './displaywithid.component';

describe('DisplaywithidComponent', () => {
  let component: DisplaywithidComponent;
  let fixture: ComponentFixture<DisplaywithidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaywithidComponent]
    });
    fixture = TestBed.createComponent(DisplaywithidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
