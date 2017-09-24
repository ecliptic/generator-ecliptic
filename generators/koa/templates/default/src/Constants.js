// @flow
import dotenv from 'dotenv'

// Load environment variables from a .env file if it exists
dotenv.config({silent: true})

<% if (slack.use) { -%>
export const SLACK = {
  CLIENT_ID: '<%= slack.clientId %>',
  CLIENT_SECRET: process.env.SLACK_CLIENT_SECRET || '',
  BEARER_TOKEN: process.env.SLACK_BEARER_TOKEN || '',
}
<% } -%>

export const ERRORS = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  WRONG_TOKEN: 'WRONG_TOKEN',
}

const DEFAULT_ERROR = 'Sorry, but something seems to have gone wrong! Please contact support or try your request again later.';

export const ERROR_REPLIES = {
  [ERRORS.UNAUTHORIZED]: DEFAULT_ERROR,
  [ERRORS.WRONG_TOKEN]: DEFAULT_ERROR,
}
