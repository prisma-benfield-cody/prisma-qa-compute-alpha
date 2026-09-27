import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()
app.get('/', (c) => c.text('prisma-qa-compute-alpha'))

const port = Number(process.env.PORT || 3000)
serve({ fetch: app.fetch, port })
