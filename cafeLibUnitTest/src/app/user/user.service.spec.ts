import { TestBed, inject, async } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService (no TestBed)', () => {
  service:UserService


  let service:UserService

  beforeEach(()=>{
    service = new UserService()
  })

  it('#getUserName should return Smith Murphy a',() => {
    expect(service.getUsername()).toBe('Smith Murphy')
  })

  it('#getUserName should return Smith Murphy b',(done:DoneFn) => {
    service.getUsername_p().then(username => {
      expect(username).toBe('Smith Murphy')
      done()
    })
  })

  it('#getUsername should return Smith Murphy c', (done:DoneFn)=>{
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

  it('should return Smith Murphy a with TestBed', ()=>{
    const service: UserService = TestBed.get(UserService)
    expect(service.getUsername()).toBe('Smith Murphy')
  })
  
  it('should return Smith Murphy b with TestBed', (done:DoneFn) => {
    const service: UserService = TestBed.get(UserService)

    service.getUsername_p().then( nameValue => {
      expect(nameValue).toBe('Smith Murphy')
      done()
    })
  })

  it('should return Smith Murphy c1 with TestBed', async(inject([UserService], (service) => {
      service.getUsername_o().subscribe( nameValue => {
        expect(nameValue).toBe('Smith Murphy')
      })
    }))
  )

  it('should return Smith Murphy c1 with TestBed', async(()=>{
    const service = TestBed.get(UserService)
    service.getUsername_o().subscribe( nameValue => {
      expect(nameValue).toBe('Smith Murphy')
    })
  })) 
})  
