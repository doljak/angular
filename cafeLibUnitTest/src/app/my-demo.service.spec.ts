import { TestBed } from '@angular/core/testing';

import { MyDemoService } from './my-demo.service';

describe('MyDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[MyDemoService]
  }));

  it('should be created', () => {
    const service: MyDemoService = TestBed.get(MyDemoService);
    expect(service).toBeTruthy();
  });
});
