import { TestBed } from '@angular/core/testing';

import { GameaiService } from './gameai-service';

describe('GameaiService', () => {
  let service: GameaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
