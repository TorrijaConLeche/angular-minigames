import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logicgames } from './logicgames';

describe('Logicgames', () => {
  let component: Logicgames;
  let fixture: ComponentFixture<Logicgames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logicgames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logicgames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
