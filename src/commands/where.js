
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
    var responseText

    if(requestText.slice(0,3)=="is ") requestText = requestText.substring(3)
    if(requestText.slice(-1)=="?") requestText = requestText.substring(0, requestText.length - 1)


    switch(requestText){
      case 'cmp':
        responseText = "This is a response to CMP"
        break;

      default:
        responseText = "I don't recognise that command."
    }

    console.log("REQUEST: " + payload.user_name + " (" + payload.channel_name + "): `/where is " + payload.text + "`")

    let msg = _.defaults({
      channel: payload.channel_name,
      text: responseText,
      attachments: attachments
    }, msgDefaults)

    res.set('content-type', 'application/json')
    res.status(200).json(msg)
    return
}

module.exports = { pattern: /^is /ig, handler: handler }
