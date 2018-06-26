const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  client.user.setActivity('BigNoseBro Gang');
});
client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('443776243385630723').roles.find('name', 'Rainbow').edit({color: 'RANDOM'})
    },1000);
});


client.login('NDYwOTkyOTAwMDg0MjY5MDc4.DhM0oA.VkELyXdd-zvOw7ZYUKlWotTLcuI');
