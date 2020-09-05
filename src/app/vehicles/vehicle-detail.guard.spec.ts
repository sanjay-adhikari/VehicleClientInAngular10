import { TestBed, async, inject } from '@angular/core/testing';

import { VehicleDetailGuard } from './vehicle-detail.guard';

describe('VehicleDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleDetailGuard]
    });
  });

  it('should ...', inject([VehicleDetailGuard], (guard: VehicleDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
