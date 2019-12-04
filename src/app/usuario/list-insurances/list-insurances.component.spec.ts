import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInsurancesComponent } from './list-insurances.component';

describe('ListInsurancesComponent', () => {
  let component: ListInsurancesComponent;
  let fixture: ComponentFixture<ListInsurancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInsurancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInsurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
