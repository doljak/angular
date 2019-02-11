import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
describe('ApiService', () => {
  let service: ApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ApiService] });
    service = TestBed.get(ApiService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
