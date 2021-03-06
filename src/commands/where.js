
'use strict'

const _ = require('lodash')
const config = require('../config')

// Adding in youtube video reponses
const theLove = [{
      title: "The Black Eyed Peas - Where Is The Love?",
      title_link: "https://www.youtube.com/watch?v=WpYeekQkAdc"
    }]

// Display images as an attachment reponse 
const groundFloorImage = [{
      title: "Ground floor map",
      image_url: "http://i.imgur.com/PLPLsuO.png"
    }]
const firstFloorImage = [{
      title: "First floor map",
      image_url: "http://i.imgur.com/NBgLWpi.png"
    }]
const secondFloorImage = [{
      title: "Second floor map",
      image_url: "http://i.imgur.com/6MCF8Vw.png"
    }]

 const thirdFloorImage = [{
      title: "Third floor map",
      image_url: "http://i.imgur.com/rOkcR1j.png"
    }]
 

const msgDefaults = {
  response_type: 'ephemeral',
  username: 'Wherebot',
  icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {

    var requestText = payload.text.toLowerCase()
    var attachment = null;
    var responseText

    // Remove 'is' if someone types '/where is CMP2019', this prevents Internal Server Errors
    if(requestText.slice(0,3)=="is ") requestText = requestText.substring(3)
    // Remove quesiton marks at the end the slash command, this prevents Internal Server Errors
    if(requestText.slice(-1)=="?") requestText = requestText.substring(0, requestText.length - 1)

    // Switch statement that determines the output based on input
    switch(requestText){
    // Check Request Text and send response accordingly
      case 'cmp0':
        responseText = "This is the ground floor map"
        attachment = groundFloorImage
        break;
      case 'cmp1':
        responseText = "This is the first floor map"
        attachment = firstFloorImage
        break;
      case 'cmp2':
        responseText = "This is the second floor map"
        attachment = secondFloorImage
        break;
      case 'cmp3':
        responseText = "This is the third floor map"
        attachment = thirdFloorImage
        break;
    // Funny easter eggs 
      case 'the love':
        responseText = "It's here, I think."
        attachment = theLove
        break;

      default:
        responseText = "I don't recognise that command."
        attachment = theRoom
    }

    console.log("REQUEST: " + payload.user_name + " (" + payload.channel_name + "): `/where is " + payload.text + "`")

    let msg = _.defaults({
      channel: payload.channel_name,
      text: responseText,
      attachments: attachment
    }, msgDefaults)

    res.set('content-type', 'application/json')
    res.status(200).json(msg)
    return
}

module.exports = { pattern: /^((?!help).)/ig, handler: handler }
