import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourEventoComponent } from './tour-evento.component';

describe('TourEventoComponent', () => {
  let component: TourEventoComponent;
  let fixture: ComponentFixture<TourEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
