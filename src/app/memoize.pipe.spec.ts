import { MemoizePipe } from './memoize.pipe';

describe('MemoizePipe', () => {
  it('create an instance', () => {
    const pipe = new MemoizePipe();
    expect(pipe).toBeTruthy();
  });
});
