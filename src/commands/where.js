
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
    var attachments = null;
    var reponseText

    if(requestText.slice(0,3)=="is ") requestText = requestText.substring(3)
    if(requestText.slice(-1)=="?") requestText = reponseText.substring(0, requestText.length - 1)

    switch(requestText){
      case 'CMP':
        responseText = "This is a response to CMP"
        break;

      default:
        responseText = "I don't recognise that command."
    }

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
