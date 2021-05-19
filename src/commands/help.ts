import { Message, MessageEmbed } from 'discord.js'
import Client from '../struct/Client'

export default function (client: Client, msg: Message) {
  const embed = new MessageEmbed()
    .setTitle('도움말')
    .setColor('RANDOM')
    .addField(';핑', '그냥 핑 재는 용도\n```ping/pong```')
    .addField(';도움', '명령어 모음\n```help/도움말/ㅗ디ㅔ/ehdna/ehdnaakf```')
    .addField(';알림 [메시지 ID (필수)]', '구글에 검색하면 나올만한 질문을 대신 검색해줍니다. 메시지 ID가 해당 채널의 메시지가 아니거나, 제대로 된 ID가 아닐 경우 검색 결과 대신 경고문만 출력됩니다.\n```경고/안내/제발```')
    .setFooter(msg.author.tag, msg.author.displayAvatarURL())
    .setTimestamp()
  msg.channel.send({
    embed: embed
  })
}

export const aliases = ['도움', 'help', '도움말', 'ㅗ디ㅔ', 'ehdna', 'ehdnaakf']
