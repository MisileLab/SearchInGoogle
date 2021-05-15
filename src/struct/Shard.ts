import { ShardingManager } from 'discord.js'
import * as dotenv from 'dotenv'
dotenv.config()

const shard = new ShardingManager('./lib/index.js', {
  token: process.env.TOKEN,
  totalShards: 'auto'
})

shard.on('shardCreate', (shard) => {
  console.log(`[SHARD] Shard ${shard.id} launched`)
})

shard.spawn()
