import { TestBed, inject } from '@angular/core/testing';
import { OctagonGirlService } from './octagon-girl.service';

describe('OctagonGirlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OctagonGirlService]
    });
  });

  it('should be created', inject([OctagonGirlService], (service: OctagonGirlService) => {
    expect(service).toBeTruthy();
  }));
});
