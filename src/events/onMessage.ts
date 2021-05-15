import Discord from 'discord.js'
import Client from '../struct/Client'
import Query from '../struct/Query'

const onMessage = (client: Client, message: Discord.Message) => {
  const { prefix } = client.config
  const { author, content } = message
  
  if (!message.guild) return
  if (author.bot) return
  if (!content.startsWith(prefix)) return

  const query = new Query(prefix, content)
  const target = client.commands.find((command) => command.aliases.includes(query.cmd))

  if (!target) return
  target.default(client, message, query)
}

export default onMessage
