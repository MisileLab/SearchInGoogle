import Discord from 'discord.js'
import Client from '../struct/Client'
import Query from '../struct/Query'

const onMessage = (client: Client, message: Discord.Message) => {
  if (message.author.bot) return
  if (!message.guild) {
    return message.author.send('DM은 음악을 재생할 수 없기 때문에 지원하지 않아요.')
  }
  if (!message.content.startsWith(client.config.prefix)) return

  const query = new Query(client.config.prefix, message.content)
  const command = client.commands.find((command) => {
    command.aliases = command.aliases || []
    command.aliases.includes(query.cmd)
  })

  if (!command) return

  command.default(client, message, query)
}

export default onMessage
