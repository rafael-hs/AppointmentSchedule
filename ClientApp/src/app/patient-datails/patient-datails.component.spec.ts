import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDatailsComponent } from './patient-datails.component';

describe('PatientDatailsComponent', () => {
  let component: PatientDatailsComponent;
  let fixture: ComponentFixture<PatientDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
