
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TmdbSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TmdbSDK.test()
    equal(testsdk instanceof TmdbSDK, true,
      'TmdbSDK.test() must return a client synchronously')
  })

})
