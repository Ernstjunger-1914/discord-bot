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

    if(msg.content.substring(0, 3) === "!투표") {
        const description = msg.content.substring(3);

        const embed = new Discord.MessageEmbed()
            .setTitle("👇 원하는 항목에 투표해주세요.")
            .setDescription(description)
            .setColor("RED");
        
        msg.channel.send(embed)
        .then((msg) => {
            msg.react("👍")
            msg.react("👎")
        });
    }

    if(msg.content === '제작자') {
        const embed = new Discord.MessageEmbed()
            .setAuthor("vot768", "https://blogpfthumb-phinf.pstatic.net/MjAyMTA2MTJfMjYg/MDAxNjIzNDY1OTMyNjI5.DNP5DcjwEZyBn9MH0Yo8-wUbZtOlH98xm1dpY5LKq7cg._7dRl2lQhL7d6AU4N1PctNGJ8nQGWMZ0DSCzgoQtEOwg.PNG.vot768/389_20210612114315.png?type=w161")
            .setTitle("제작자 블로그")
            .setURL("https://blog.naver.com/vot768")
            .setDescription("제작자의 개인 블로그 입니다.")
            .setThumbnail("https://toppng.com/uploads/preview/discordbot-bot-discord-11563261320iwm1tpnosh.png")
            .addFields(
                { name: "특기", value: "없음", inline: true },
                { name: "기술", value: "없음", inline: true },
                { name: "장점", value: "없음", inline: true },
                { name: "단점", value: "없음", inline: true },
            )
            .setFooter("손소독");

        msg.channel.send(embed);
    }
});

client.login(process.env.DISCORD_TOKEN);