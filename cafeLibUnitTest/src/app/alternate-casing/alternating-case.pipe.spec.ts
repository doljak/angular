import { AlternatingCasePipe } from './alternating-case.pipe';

describe('AlternatingCasePipe', () => {

  it('create an instance', () => {
    const pipe = new AlternatingCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform "Jefferson" to "jEfFeRsOn"', ()=>{
    const pipe = new AlternatingCasePipe();
    expect(pipe.transform('Jefferson')).toBe("jEfFeRsOn")
  })
});
