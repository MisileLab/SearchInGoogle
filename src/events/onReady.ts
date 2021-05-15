import fs from 'fs'
import ascii from 'ascii-table'
import Client from '../struct/Client'

const onReady = (client: Client) => {
  const table = new ascii()
  table.setHeading('Command', 'Load Status')
  fs.readdir('./lib/commands/', (err, list) => {
    for (let file of list) {
      try {
        let pull = require(`../commands/${file}`)
        if (pull.name && pull.aliases && pull.run) {
          table.addRow(file, '✅')
        } else {
          table.addRow(file, '❌ -> Error')
          continue
        }
      } catch (e) {
        table.addRow(file, `❌ -> ${e}`)
        continue
      }
    }
    console.log(table.toString())
  })
  if (client.user) {
    console.log(`Logged in as ${client.user.tag}\n=-=-=-=-=-=-=-=-=-=`)
    client.user.setPresence({
      status: 'online',
      activity: {
        name: `음악`,
        type: 'LISTENING'
      }
    })
  }
}

export default onReady
