import { Message, MessageEmbed } from 'discord.js'
import Client from '../struct/Client'

export default function (client: Client, msg: Message) {
  const embed = new MessageEmbed()
    .setTitle('도움말')
    .setColor('YELLOW')
    .addField(';핑', '그냥 핑 재는 용도')
    .addField(';도움', '명령어 모음')
    .setFooter(msg.author.tag, msg.author.displayAvatarURL())
    .setTimestamp()
  msg.channel.send({
    embed: embed
  })
}

export const aliases = ['도움', 'help', '도움말', 'ㅗ디ㅔ', 'ehdna', 'ehdnaakf']
