// @flow
import dotenv from 'dotenv'

// Load environment variables from a .env file if it exists
dotenv.config({silent: true})

export const SLACK = {
  CLIENT_ID: '2768766081.165231053671',
  CLIENT_SECRET: process.env.SLACK_CLIENT_SECRET || '',
  BEARER_TOKEN: process.env.SLACK_BEARER_TOKEN || '',
}

