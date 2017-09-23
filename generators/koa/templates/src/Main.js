// @flow
import {myCommand} from './Routes/Commands'
import bodyParser from 'koa-bodyparser'
import chalk from 'chalk'
import cors from 'kcors'
import Koa from 'koa'
import koaRouter from 'koa-router'
import logger from 'koa-logger'

const app = new Koa()

// Set the random key for generating session ids
app.keys = ['<%= sessionKey %>']

// Include some useful middleware
app.use(logger())
app.use(bodyParser())
app.use(cors())

const router = koaRouter()

// Establish routes
router.get('/', async ctx => {
  ctx.body = 'ok'
})
router.post('/commands/slack/my-command', myCommand)

// Use the initialized routes
app.use(router.routes())
app.use(router.allowedMethods())

// Start up the server on the given port
const port = process.env.PORT || 4000
app.listen(port)

// Report success!
console.log(
  `${chalk.blue('<%= name  %>')} is listening on port ${chalk.green(port)}...`
)
