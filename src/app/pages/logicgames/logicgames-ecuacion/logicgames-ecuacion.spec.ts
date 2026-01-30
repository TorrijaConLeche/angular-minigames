import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicgamesEcuacion } from './logicgames-ecuacion';

describe('LogicgamesEcuacion', () => {
  let component: LogicgamesEcuacion;
  let fixture: ComponentFixture<LogicgamesEcuacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogicgamesEcuacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicgamesEcuacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
