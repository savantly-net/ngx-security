import { TestBed, inject } from '@angular/core/testing';

import { SecurityMockService } from './security-mock.service';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('MockSecurityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityMockService]
    });
  });

  it('should be created', inject([SecurityMockService], (service: SecurityMockService) => {
    expect(service).toBeTruthy();
  }));
});
