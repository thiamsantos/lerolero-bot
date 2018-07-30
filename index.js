require('dotenv').config()
const Discord = require('discord.js')
const lerolero = require('lerolero')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async msg => {
  if (msg.content === '/lerolero') {
    const sent = await msg.reply(lerolero())
    console.log(`Sent a reply to ${sent.author.username}`)
  }
})

client.login(process.env.DISCORD_TOKEN)