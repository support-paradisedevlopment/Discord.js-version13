const Discord = requiere('discord.js');
const client = new Discord.Client({intents: "GUILDS", "GUILD_MESSAGES"})
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
});

client.on('messageCreate', async (msg) => {
});
client.login(process.env.token)
