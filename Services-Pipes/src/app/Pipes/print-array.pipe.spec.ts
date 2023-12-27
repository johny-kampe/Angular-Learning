import { PrintArrayPipe } from './print-array.pipe';

describe('PrintArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new PrintArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
