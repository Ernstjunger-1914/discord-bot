const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content === 'ping') {
        msg.reply('pong');
    }

    if(msg.content.substring(0, 3) === "!ν¬ν") {
        const description = msg.content.substring(3);

        const embed = new Discord.MessageEmbed()
            .setTitle("π μνλ ν­λͺ©μ ν¬νν΄μ£ΌμΈμ.")
            .setDescription(description)
            .setColor("RED");
        
        msg.channel.send(embed)
        .then((msg) => {
            msg.react("π")
            msg.react("π")
        });
    }

    if(msg.content === 'μ μμ') {
        const embed = new Discord.MessageEmbed()
            .setAuthor("vot768", "https://blogpfthumb-phinf.pstatic.net/MjAyMTA2MTJfMjYg/MDAxNjIzNDY1OTMyNjI5.DNP5DcjwEZyBn9MH0Yo8-wUbZtOlH98xm1dpY5LKq7cg._7dRl2lQhL7d6AU4N1PctNGJ8nQGWMZ0DSCzgoQtEOwg.PNG.vot768/389_20210612114315.png?type=w161")
            .setTitle("μ μμ λΈλ‘κ·Έ")
            .setURL("https://blog.naver.com/vot768")
            .setDescription("μ μμμ κ°μΈ λΈλ‘κ·Έ μλλ€.")
            .setThumbnail("https://toppng.com/uploads/preview/discordbot-bot-discord-11563261320iwm1tpnosh.png")
            .addFields(
                { name: "νΉκΈ°", value: "μμ", inline: true },
                { name: "κΈ°μ ", value: "μμ", inline: true },
                { name: "μ₯μ ", value: "μμ", inline: true },
                { name: "λ¨μ ", value: "μμ", inline: true },
            )
            .setFooter("μμλ");

        msg.channel.send(embed);
    }
});

client.login(process.env.DISCORD_TOKEN);