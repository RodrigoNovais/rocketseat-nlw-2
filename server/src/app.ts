import Koa from 'koa'

import bodyParser from 'koa-bodyparser'
import helmet from "koa-helmet";
import cors from 'koa2-cors'

import routes from './routes'

const app = new Koa()

app.use(cors())
app.use(helmet())
app.use(bodyParser())
app.use(routes)

export default app
