
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Wherebot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'Wherebot will help you find the location of any room in the MHT Building.',
    color: '#2FA44F',
    text: '`/where [room name]` returns the location of any room in the MHT',
    mrkdwn_in: ['text']
  },
  {
    title: 'Configuring Wherebot',
    color: '#E3E4E6',
    text: '`/where help` ... you\'re lookin at it! \n',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
