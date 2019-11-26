// Packages
const test = require('ava')
const micro = require('micro')
const listen = require('test-listen')
const request = require('request-promise')

// Service
const service = require('../src')

test('1. Working', async t => {
  const microInstance = micro(service)
  const url = await listen(microInstance)
  const body = await request(url + '/health')
  t.deepEqual(body, 'Working...')
})
