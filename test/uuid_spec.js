import {expect} from 'chai';
import uuid from '../src';

describe('uuid', () => {
  it('it generete uuid', () => {
    const _uuid = uuid();
    expect(_uuid).to.be.ok;
    expect(_uuid.length).to.equal(36);
  });
});
