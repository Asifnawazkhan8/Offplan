import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffplnComponent } from './offpln.component';

describe('OffplnComponent', () => {
  let component: OffplnComponent;
  let fixture: ComponentFixture<OffplnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffplnComponent]
    });
    fixture = TestBed.createComponent(OffplnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
