import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealSsrmComponent } from './deal-ssrm.component';

describe('DealSsrmComponent', () => {
  let component: DealSsrmComponent;
  let fixture: ComponentFixture<DealSsrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealSsrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealSsrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
