import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTrackOverviewComponent } from './money-track-overview.component';

describe('MoneyTrackOverviewComponent', () => {
  let component: MoneyTrackOverviewComponent;
  let fixture: ComponentFixture<MoneyTrackOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyTrackOverviewComponent]
    });
    fixture = TestBed.createComponent(MoneyTrackOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
