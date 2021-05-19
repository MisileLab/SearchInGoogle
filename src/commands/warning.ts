import { Message } from 'discord.js'
import Client from '../struct/Client'

export default function (client: Client, msg: Message) {
  const prefix = ';'
  const args = msg.content.substr(prefix.length).trim().split(' ')
  if(args[1]){
    let search: any = msg.channel.messages
    .fetch(args[1])
    .then((message) => {
        search = message.content.replace(' ', '%20')
        msg.channel.send(`안녕하세요!\n
질문 중에 죄송하지만 방금 전 하셨던 질문과 같이 대부분의 간단한 질문들은 구글에 검색하는 것만으로도 해결이 가능합니다.\n
구글 검색 결과 바로가기 : https://google.com/search?q=${search}`)
    })
    .catch(error => msg.channel.send('안녕하세요!\n질문 중에 죄송하지만 방금 전 하셨던 질문과 같이 대부분의 간단한 질문들은 구글에 검색하는 것만으로도 해결이 가능합니다.'))
  } else {
      return
  }
}

export const aliases = ['알림', '경고', '안내', '제발']
