
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Wherebot',
  icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {

    var requestText = payload.text.toLowerCase()

    var reponseText = "Helllooooooo"

    var attachments = null;

    let msg = _.defaults({
      channel: payload.channel_name,
      text: reponseText,
      attachments: attachments
    }, msgDefaults)

    res.set('content-type', 'application/json')
    res.status(200).json(msg)
    return
}

module.exports = { pattern: /^is /ig, handler: handler }
