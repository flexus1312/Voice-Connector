const Discord = require("discord.js-self");
const client = new Discord.Client();

client.on("ready", () => {
  client.channels.cache.get(`kanalid`).join(); //gireceği ses kanalı id
  console.log(`Logined.`);
  client.user.setStatus('dnd');
});

client.on(`voiceStateUpdate`, () => {
      client.channels.cache.get(`kanalid`).join(); //gireceği ses kanalı id
});

client.login(
  "Token" //Tokeninizi Giriniz.
);
