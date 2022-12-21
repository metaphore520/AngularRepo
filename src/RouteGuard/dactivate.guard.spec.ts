import { TestBed } from '@angular/core/testing';

import { DactivateGuard } from './dactivate.guard';

describe('DactivateGuard', () => {
  let guard: DactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
