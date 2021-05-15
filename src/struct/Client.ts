import { Client } from 'discord.js'
import { Command, Config } from '../typings'
import { readRecursively } from '../utils'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config()
const PATH = path.resolve()

export default class extends Client {
  public config: Config
  public commands: Command[] = []

  constructor() {
    super()

    this.config = {
      token: process.env.TOKEN || '',
      prefix: process.env.PREFIX || ';',
      invite: process.env.INTVITE || ''
    }
    const files = readRecursively(PATH + '/lib/commands')
    for (const file of files) {
      this.commands.push(require(file) as Command)
    }
  }

  public start = (token?: string) => this.login(token || this.config.token)
  public regist = (event = 'ready', exec: any) => {
    this.on(event, (...args) => exec(this, ...args))
  }
}
