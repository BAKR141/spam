const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592616403744325642")
setInterval(function() {
channel.send(` «··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»—«··Â «ﬂ»— `);
}, 30)
})

client.login(process.env.BOT_TOKEN);