import Discord from 'discord.js'
import Client from '../struct/Client'
import Query from '../struct/Query'

const onMessage = (client: Client, message: Discord.Message) => {
  const { prefix } = client.config
  const { author, content } = message
  
  if (!message.guild) return
  if (author.bot) return

  if(client.user){
    if (message.mentions.has(client.user.id)) {
      if (message.content.includes('@here') || message.content.includes('@everyone')) return
      return message.channel.send(';')
    }
    if (message.content == ';') {
      return message.channel.send(';도움')
    }
  }

  if (!content.startsWith(prefix)) return

  const query = new Query(prefix, content)
  const target = client.commands.find((command) => command.aliases.includes(query.cmd))

  if (!target) return
  target.default(client, message, query)
}

export default onMessage
