import { TestBed } from '@angular/core/testing';

import { AppServService } from './app-serv.service';

describe('AppServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppServService = TestBed.get(AppServService);
    expect(service).toBeTruthy();
  });
});
