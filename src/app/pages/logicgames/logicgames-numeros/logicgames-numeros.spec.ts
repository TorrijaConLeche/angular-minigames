import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicgamesNumeros } from './logicgames-numeros';

describe('LogicgamesNumeros', () => {
  let component: LogicgamesNumeros;
  let fixture: ComponentFixture<LogicgamesNumeros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogicgamesNumeros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicgamesNumeros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
