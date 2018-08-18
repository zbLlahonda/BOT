const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("//")

bot.on('ready', function() {
    bot.user.setActivity(" zbL Je t'aime ");
    console.log("Connected");
});

bot.login(process.env.NDgwMjE3NzM2OTY2OTYzMjEy.Dll0jg.xptWhw6j9JqlyDmejT1ICMAF5X0);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -'help");
    }

    if (message.content === "Salut c'est Zébulon"){
        message.reply("Allez ntm");
        console.log("Commande Salut effectué");
    }


bot.login(config.token);

bot.on('message',message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowercase();

    if (command === "kick") {
        let modRole = message.guild.roles.find('name","dev");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Don't access").catch(console.error);
        }
        if(message.mention.users.size === 0) {
            return message.reply("Mentionne le").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("Impossible ?")
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Don't access").catch(console.error);
        }

        kickMember.kick().then(member => {
            message.reply(`${member.user.username} a été expulsé avec succès.`).catch(console.error);
            message.guild.channels.find("name", "general").send(`**${member.user.username} a été expulsé du discord par **${message.author.username}**`
        
        }
        if (command === "ban") {
            let modRole = message.guild.roles.find("name", "dev");
            if(!message.member.roles.has(modRole.id)) {
                return message.reply("Don't access").catch(console.error);
            }
            const member = message.mentions.members.first();
            if (!member) return message.reply("Mentionne le");
            member.ban().then(member => {
                message.reply(`${member.user.username} a été banni avec succès.`).catch(console.error);
                message.guild.channels.find("name", "logs-serveur").send(`**${member.user.username}** a été banni du discord par **${message.author.username}**`)
            }).catch(console.error)   
    }})






