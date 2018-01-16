import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRisksComponent } from './security-risks.component';

describe('SecurityRisksComponent', () => {
  let component: SecurityRisksComponent;
  let fixture: ComponentFixture<SecurityRisksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityRisksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityRisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
