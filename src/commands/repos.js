
'use strict'

const _ = require('lodash')
const config = require('../config')
const trending = require('github-trending')

var groundFloorImage = 'https://api.imgur.com/3/image/Fyl0Q';
var firstFloorImage = 'https://api.imgur.com/3/image/AunlR';
var secondFloorImage = 'https://api.imgur.com/3/image/LuGpR';
var thirdFloorImage = 'https://api.imgur.com/3/image/2Rbtg';

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Wherebot',
  icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {
  trending('javascript', (err, repos) => {
    if (err) throw err

    var attachments = repos.slice(0, 5).map((repo) => {
      return {
        title: `${repo.owner}/${repo.title} `,
        title_link: repo.url,
        text: `_${repo.description}_\n${repo.language} • ${repo.star}>`,
        image: secondFloorImage,
        mrkdwn_in: ['text', 'pretext']
      }
    })

    let msg = _.defaults({
      channel: payload.channel_name,
      attachments: attachments
    }, msgDefaults)

    res.set('content-type', 'application/json')
    res.status(200).json(msg)
    return
  })
}

module.exports = { pattern: /repos/ig, handler: handler }
