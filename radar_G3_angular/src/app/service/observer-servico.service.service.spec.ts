import { TestBed } from '@angular/core/testing';

import { ObserverServicoServiceService } from './observer-servico.service.service';

describe('ObserverServicoServiceService', () => {
  let service: ObserverServicoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserverServicoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
