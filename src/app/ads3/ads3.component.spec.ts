import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ads3Component } from './ads3.component';

describe('Ads3Component', () => {
  let component: Ads3Component;
  let fixture: ComponentFixture<Ads3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ads3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ads3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
