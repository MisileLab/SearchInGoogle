import { Message } from 'discord.js'
import Client from '../struct/Client'

export default {
  name: '핑',
  aliases: ['ping'],
  run: (client: Client, message: Message) => {
    message.channel.send('pong! (' + client.ws.ping + 'ms)')
  }
}
