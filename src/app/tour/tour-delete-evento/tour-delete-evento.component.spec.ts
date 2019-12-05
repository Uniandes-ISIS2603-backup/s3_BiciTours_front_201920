import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDeleteEventoComponent } from './tour-delete-evento.component';

describe('TourDeleteEventoComponent', () => {
  let component: TourDeleteEventoComponent;
  let fixture: ComponentFixture<TourDeleteEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDeleteEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDeleteEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
