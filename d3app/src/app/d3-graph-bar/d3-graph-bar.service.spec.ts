import { TestBed, inject } from '@angular/core/testing';

import { D3GraphBarService } from './d3-graph-bar.service';

describe('D3GraphBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [D3GraphBarService]
    });
  });

  it('should be created', inject([D3GraphBarService], (service: D3GraphBarService) => {
    expect(service).toBeTruthy();
  }));
});
