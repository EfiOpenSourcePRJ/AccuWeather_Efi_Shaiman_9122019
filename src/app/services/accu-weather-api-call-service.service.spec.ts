import { TestBed } from '@angular/core/testing';

import { AccuWeatherApiCallServiceService } from './accu-weather-api-call-service.service';

describe('AccuWeatherApiCallServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccuWeatherApiCallServiceService = TestBed.get(AccuWeatherApiCallServiceService);
    expect(service).toBeTruthy();
  });
});
