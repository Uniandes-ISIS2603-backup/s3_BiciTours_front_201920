import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourAddEventoComponent } from './tour-add-evento.component';

describe('TourAddEventoComponent', () => {
  let component: TourAddEventoComponent;
  let fixture: ComponentFixture<TourAddEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourAddEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourAddEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
