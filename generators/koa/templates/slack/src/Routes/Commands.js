// @flow
import {ERRORS, ERROR_REPLIES, SLACK} from '../Constants'

const USER_REGEX = /(<@([a-z0-9]+)\|([a-z0-9][a-z0-9._-]+)>)/gi

export async function myCommand (ctx: *) {
  const {token, user_name: userName, user_id: userId, text} = ctx.request.body

  if (token !== SLACK.BEARER_TOKEN) {
    ctx.status = 401
    ctx.body = {
      text: ERROR_REPLIES[ERRORS.WRONG_TOKEN],
    }
    return
  }

  // Compose a reply
  ctx.status = 200
  ctx.body = {
    response_type: 'in_channel',
    text: `@${userName} ran a command: ${text}`,
  }
}
