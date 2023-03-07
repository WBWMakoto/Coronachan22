require('dotenv/config');
const { ShardingManager } = require('discord.js');

//const Bot = require('./src/Structures/bot.js');
//const client = new Bot();
//client.start();

const manager = new ShardingManager('./src/Structures/bot.js', {
  token: process.env.BotToken,
  totalShards: 'auto',
});

manager.spawn();

manager.on('shardCreate', (shard) => {
  console.log(`Launched shard ${shard.id}`);
  shard.on('ready', () => console.log(`Shard ${shard.id} ready!`));
  shard.on('disconnect', () => console.log(`Shard ${shard.id} disconnected!`));
  shard.on('reconnecting', () => console.log(`Shard ${shard.id} reconnecting...`));
  shard.on('error', (error) => console.error(`Shard ${shard.id} encountered an error: ${error.message}`));
  shard.on('warn', (warning) => console.warn(`Shard ${shard.id} encountered a warning: ${warning.message}`));
});
