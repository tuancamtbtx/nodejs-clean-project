# Guideline

## Installation

Initial
```bash
git clone git@gitlab.com:tungtung-enterprise/services/clean-service.git new-service
cd new-service
yarn install
yarn run dev # dev
yarn run dev --port 3001 # dev with port
yarn run start # production
yarn run start --port 3001 # production with port
```

## Modules
```json
{
  "@bit/tungtung.micro.components.amqp": "^0.0.1",
  "@bit/tungtung.micro.components.logger": "^0.0.1",
  "@bit/tungtung.micro.components.micro-boom": "^0.0.1",
  "@bit/tungtung.micro.components.micro-crud": "^0.0.1",
  "@bit/tungtung.micro.components.micro-joi": "^0.0.1",
  "@bit/tungtung.micro.components.middleware-auth": "^0.0.1",
  "@bit/tungtung.micro.components.mongo": "^0.0.1"
}
```

## Use rabbitMQ

1. Publish

```javascript
const publish = require('@bit/tungtung.micro.components.amqp/publish')
publish('USER_UPDATED', data)
```

2. Subscribe

```javascript
const subscribe = require('@bit/tungtung.micro.components.amqp/subscribe')
subscribe({
  'USER_UPDATED': (data) => {
    // handle(data)
  },
  // ... more event listen
})

```

3. Sample `amqp-test`

```javascript
require('dotenv').config()
const subscribe = require('@bit/tungtung.micro.components.amqp/subscribe')

subscribe({
  'USER_UPDATED': user => {
    console.log(user)
  }
})
```
