import Client from './struct/Client'
import onMessage from './events/onMessage'
import onReady from './events/onReady'

const client = new Client()

client.start()
client.regist('ready', onReady)
client.regist('message', onMessage)
