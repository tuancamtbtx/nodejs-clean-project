const { router, get, withNamespace } = require('microrouter')
const { handleErrors } = require('@bit/tungtung.micro.components.micro-boom')
const createMiddlewareAuth = require('@bit/tungtung.micro.components.middleware-auth')
const cors = require('micro-cors')({ origin: '*' })
const config = require('config')
// const faker = require('faker')

const namespace = withNamespace(`/${config.serviceName}`)

const authMiddleware = createMiddlewareAuth()

const routerConbine = (...args) => cors(router(...args))
const composeMiddle = func => handleErrors(authMiddleware(func))

module.exports = routerConbine(
  namespace(
    get(
      '/user',
      composeMiddle(req => {
        return req.user
      })
    ),
    get('/test', handleErrors(() => 'Welcome clean service')),
    get('/*', () => config.serviceName)
  ),
  get('/health', () => 'Working...'),
  get('/*', () => config.serviceName)
)
