import { Message } from 'discord.js'
import Client from '../struct/Client'
import Query from '../struct/Query'

interface Command {
  default: (client: Client, msg: Message, query: Query) => any
  aliases: string[]
}

export default Command
