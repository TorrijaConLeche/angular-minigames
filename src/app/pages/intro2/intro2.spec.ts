import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro2 } from './intro2';

describe('Intro2', () => {
  let component: Intro2;
  let fixture: ComponentFixture<Intro2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intro2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
