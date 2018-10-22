import { LibCalcModule } from './lib-calc.module';

describe('LibCalcModule', () => {
  let libCalcModule: LibCalcModule;

  beforeEach(() => {
    libCalcModule = new LibCalcModule();
  });

  it('should create an instance', () => {
    expect(libCalcModule).toBeTruthy();
  });
});
