/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

describe('promise it', () => {
  beforeEach(() => {
    this.someContextValue = 'value';
  });

  // passing tests
  it('passes a sync test', () => {
    expect(1).toBe(1);
  });

  it('waits for promise to be resolved', () => {
    return Promise.resolve();
  });

  it('works with done', done => {
    done();
  });

  it('is bount to context object', () => {
    return new Promise(resolve => {
      if (this.someContextValue !== 'value') {
        throw new Error('expected this.someContextValue to be set', this.someContextValue);
      }
      resolve();
    });
  });

  // failing tests
  it('fails if promise is rejected', () => {
    return Promise.reject(new Error('rejected promise returned'));
  });

  it('works with done.fail', done => {
    done.fail(new Error('done.fail was called'));
  });

  it('fails a sync test', () => {
    expect('sync').toBe('failed');
  });
});
