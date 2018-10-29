import { TestBed, inject, async } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService (no TestBed)', () => {
  service:UserService


  let service:UserService

  beforeEach(()=>{
    service = new UserService()
  })

  it('#getUserName should return Smith Murphy test A',() => {
    expect(service.getUsername()).toBe('Smith Murphy')
  })

  it('#getUserName should return Smith Murphy test B',(done:DoneFn) => {
    service.getUsername_p().then(username => {
      expect(username).toBe('Smith Murphy')
      done()
    })
  })

  it('#getUsername should return Smith Murphy test C', (done:DoneFn)=>{
    service.getUsername_o().subscribe(username => {
      expect(username).toBe('Smith Murphy')
      done()
    })
  })

})

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should return Smith Murphy with TestBed - test A', ()=>{
    const service: UserService = TestBed.get(UserService)
    expect(service.getUsername()).toBe('Smith Murphy')
  })
  
  it('should return Smith Murphy with TestBed - test B', (done:DoneFn) => {
    const service: UserService = TestBed.get(UserService)

    service.getUsername_p().then( nameValue => {
      expect(nameValue).toBe('Smith Murphy')
      done()
    })
  })

  it('should return Smith Murphy with TestBed - test C1', async(inject([UserService], (service) => {
      service.getUsername_o().subscribe( nameValue => {
        expect(nameValue).toBe('Smith Murphy')
      })
    }))
  )

  it('should return Smith Murphy with TestBed - test C2', async(()=>{
    const service = TestBed.get(UserService)
    service.getUsername_o().subscribe( nameValue => {
      expect(nameValue).toBe('Smith Murphy')
    })
  })) 
})  
