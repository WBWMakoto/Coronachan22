/**
 *
 * @param {import("../../Structures/bot")} client
 */
module.exports = (client) => {
  client.pickPresence = async () => {
    /*
    different types can be a number and they as follows:
    Playing: 0
    Streaming: 1
    Listening: 2
    Watching: 3
    Competing: 5
    */
    //let results = await client.shard.fetchClientValues('guilds.cache.size');
    let acts = [
      {
        type: 5,
        content: `!hpshelp or /help. Watching ${client.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)} users from ${client.guilds.cache.reduce(
          (acc, guildCount) => acc + guildCount,
          0
        )} guilds. Support the host cost at https://paypal.me/makotowbw`,
        status: 'dnd',
      },
      {
        type: 3,
        content: `!hpshelp or /help. Watching ${client.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)} users from ${client.guilds.cache.reduce(
          (acc, guildCount) => acc + guildCount,
          0
        )} guilds. Support the host cost at https://paypal.me/makotowbw`,
        status: 'online',
      },
      {
        type: 3,
        content: `!hpshelp or /help. Watching ${client.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)} users from ${client.guilds.cache.reduce(
          (acc, guildCount) => acc + guildCount,
          0
        )} guilds. Support the host cost at https://paypal.me/makotowbw`,
        status: 'online',
      },
      {
        type: 0,
        content: `!hpshelp or /help. Watching ${client.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)} users from ${client.guilds.cache.reduce(
          (acc, guildCount) => acc + guildCount,
          0
        )} guilds. Support the host cost at https://paypal.me/makotowbw`,
        status: 'idle',
      },
    ];

    setInterval(async () => {
      const currentAct = acts.shift();
      client.user.setPresence({
        activities: [
          {
            name: currentAct.content.toString(),
            type: currentAct.type,
          },
        ],
        status: currentAct.status,
        /**
         * Don't want a changing status? Just change the line above to `status: "status"`. Different statuses include "online", "idle", "dnd", and "invisible"
         */
      });
      acts.push(currentAct);
    }, 15000);
  };
};
