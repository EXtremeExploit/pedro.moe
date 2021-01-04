var commands =
    [
        {
            name: 'Social',
            commands: [
                {
                    cmd: 'kill',
                    args: '&lt;@Member&gt;',
                    ex: 'e!kill @User#0001',
                    desc: 'Kill someone, doesn\'t mute or anything',
                    aliases: 'N/A'
                },
                {
                    cmd: 'setalias',
                    args: '&lt;text&gt;',
                    ex: 'e!setalias TheLegend27',
                    desc: 'Sets your alias or AKA, whatever',
                    aliases: 'N/A'
                },
                {
                    cmd: 'setjob',
                    args: '&lt;text&gt;',
                    ex: 'e!setjob Anime girls reviewer',
                    desc: 'Sets your job, you can even be a hentai reviewer!, isn\'t that awesome?',
                    aliases: 'N/A'
                },
                {
                    cmd: 'work',
                    args: 'x',
                    ex: 'e!work',
                    desc: 'Do your job, you get money, that soon you will be able to spend on bodypillows',
                    aliases: 'w'
                },
                {
                    cmd: 'profile',
                    args: '[@Member]',
                    ex: 'e!profile @User#0001',
                    desc: 'Shows the profile of the user you mention or youself, flex those coinflips',
                    aliases: 'p'
                },
                {
                    cmd: 'rep',
                    args: '&lt;@Member&gt;',
                    ex: 'e!rep @User#0001',
                    desc: 'Give reputation to someone',
                    aliases: 'reputation'
                },
            ]
        },
        {
            name: 'Fun',
            commands: [
                {
                    cmd: 'cookie',
                    args: '&lt;@Member&gt;',
                    ex: 'e!cookie @User#0001',
                    desc: 'Gives a cookie to someone',
                    aliases: 'N/A'
                }, {
                    cmd: 'dicksize',
                    args: '[@Member]',
                    ex: 'e!dicksize @User#0001',
                    desc: 'What\'s your penis lenght? ( ͡° ͜ʖ ͡°)',
                    aliases: 'N/A'
                }, {
                    cmd: 'jokes',
                    args: 'x',
                    ex: 'e!jokes',
                    desc: 'Bad jokes xd',
                    aliases: 'N/A'
                }, {
                    cmd: 'lenny',
                    args: 'x',
                    ex: 'e!lenny',
                    desc: 'Sends the lenny face',
                    aliases: 'N/A'
                }, {
                    cmd: 'owo',
                    args: 'x',
                    ex: 'e!owo',
                    desc: 'You go OwO',
                    aliases: 'N/A'
                }, {
                    cmd: 'pat',
                    args: '&lt;@Member&gt;',
                    ex: 'e!pat @User#0001',
                    desc: 'Gives a headpat to someone',
                    aliases: 'headpat'
                }, {
                    cmd: 'reverse',
                    args: '&lt;text&gt;',
                    ex: 'e!reverse very nice',
                    desc: 'Returns the given text but reversed',
                    aliases: 'N/A'
                }, {
                    cmd: 'rps',
                    args: '&lt;@Member&gt;',
                    ex: 'e!rps @User#0001',
                    desc: 'Play Rock, Paper and Scissors',
                    aliases: 'N/A'
                }, {
                    cmd: 'rr',
                    args: '&lt;@Member&gt;',
                    ex: 'e!rps @User#0001',
                    desc: 'Play Russian Roulette',
                    aliases: 'N/A'
                }, {
                    cmd: 'sandwich',
                    args: '&lt;@Member&gt;',
                    ex: 'e!sandwich @User#0001',
                    desc: 'Gives a sandwich to someone',
                    aliases: 'N/A'
                }, {
                    cmd: 'say',
                    args: '&lt;text&gt;',
                    ex: 'e!say òwó',
                    desc: 'Says whatever you want',
                    aliases: 'N/A'
                }, {
                    cmd: 'touch',
                    args: '&lt;@Member&gt;',
                    ex: 'e!touch @User#0001',
                    desc: 'Touch someone',
                    aliases: 'N/A'
                }, {
                    cmd: 'waifu',
                    args: 'x',
                    ex: 'e!waifu',
                    desc: 'Waifu or laifu?',
                    aliases: 'N/A'
                }
            ]
        }, {
            name: 'Games',
            commands: [
                {
                    cmd: 'osu',
                    args: '&lt;osu!Username&gt;\n[Modifiers]',
                    ex: 'e!osu peppy --std --recent',
                    desc: 'Retieves your profile, check Modifiers to learn more',
                    aliases: 'N/A'
                }
            ]
        }, {
            name: 'Info',
            commands: [
                {
                    cmd: 'avatar',
                    args: '[@Member]',
                    ex: 'e!avatar @User#0001',
                    desc: 'Gets your/someone ‘s Avatar',
                    aliases: 'N/A'
                }, {
                    cmd: 'channel',
                    args: '[#channel]',
                    ex: 'e!channel',
                    desc: 'Info about a channel',
                    aliases: 'N/A'
                }, {
                    cmd: 'emoji',
                    args: '&lt;Emoji&gt;',
                    ex: 'e!emoji :kappa:',
                    desc: 'Info about an emoji',
                    aliases: 'N/A'
                }, {
                    cmd: 'role',
                    args: '&lt;Role&gt;',
                    ex: 'e!role @Admins',
                    desc: 'Info about a role',
                    aliases: 'N/A'
                }, {
                    cmd: 'server',
                    args: 'x',
                    ex: 'e!server',
                    desc: 'Info about the server',
                    aliases: 'N/A'
                }, {
                    cmd: 'stats',
                    args: '[@Member]',
                    ex: 'e!stats @User#0001',
                    desc: 'Show your or someone else\'s stats',
                    aliases: 'N/A'
                }, {
                    cmd: 'user',
                    args: '[@Member]',
                    ex: 'e!user @User#0001',
                    desc: 'Info about you/someone',
                    aliases: 'N/A'
                },
            ]
        }, {
            name: 'Misc',
            commands: [
                {
                    cmd: 'help',
                    args: '[Category Name]',
                    ex: 'e!help Fun',
                    desc: 'It displays a list of categories, if you provide a category name then it will give all the commands on that category',
                    aliases: 'N/A'
                }, {
                    cmd: 'info',
                    args: 'x',
                    ex: 'e!info',
                    desc: 'Shows info about the bot, like RAM, servers and member count, etc. Aliases',
                    aliases: 'neofetch'
                }, {
                    cmd: 'invite',
                    args: 'x',
                    ex: 'e!invite',
                    desc: 'Send the invitation link to add the bot to your server',
                    aliases: 'N/A'
                }, {
                    cmd: 'ping',
                    args: 'x',
                    ex: 'e!ping',
                    desc: 'Pings the bot and the Discord API',
                    aliases: 'N/A'
                }, {
                    cmd: 'pong',
                    args: 'x',
                    ex: 'e!pong',
                    desc: 'Pongs the bot and the Discord API',
                    aliases: 'N/A'
                }, {
                    cmd: 'uptime',
                    args: 'x',
                    ex: 'e!uptime',
                    desc: 'Displays the uptime since the bot had the READY event',
                    aliases: 'N/A'
                }, {
                    cmd: 'wikis',
                    args: 'x',
                    ex: 'e!wikis',
                    desc: 'Sends all the wikis available for the bot',
                    aliases: 'N/A'
                }
            ]
        }, {
            name: 'Moderation',
            commands: [
                {
                    cmd: 'ban',
                    args: '&lt;@Member&gt;',
                    ex: 'e!ban @User#0001',
                    desc: 'Bans someone',
                    aliases: 'N/A'
                }, {
                    cmd: 'kick',
                    args: '&lt;@Member&gt;',
                    ex: 'e!kick @User#0001',
                    desc: 'Kicks someone',
                    aliases: 'N/A'
                }, {
                    cmd: 'mute',
                    args: '&lt;@Member&gt;',
                    ex: 'e!mute @User#0001',
                    desc: 'Mutes someone',
                    aliases: 'N/A'
                }, {
                    cmd: 'prune',
                    args: 'x',
                    ex: 'e!prune 16',
                    desc: 'Deletes a count of messages in a channel',
                    aliases: 'N/A'
                }, {
                    cmd: 'svcfg',
                    args: '&lt;toggle-replies|...&gt;',
                    ex: 'e!svcfg toggle-replies',
                    desc: 'Toggles some server configuration about the bot, for example replies',
                    aliases: 'serverconfig, svconfig, servercfg'
                }, {
                    cmd: 'unmute',
                    args: '&lt;@Member&gt;',
                    ex: 'e!unmute @User#0001',
                    desc: 'Unmutes someone',
                    aliases: 'N/A'
                },
            ]
        }, {
            name: 'NSFW',
            commands: [
                {
                    cmd: 'danbooru',
                    args: '[SearchTerms]',
                    ex: 'e!danbooru\ne!danbooru touhou',
                    desc: 'Searchs on danbooru with your terms, read <a href=\'https://danbooru.donmai.us/posts?tags=help%3Acensored_tags\'&>blocked tags</a&>',
                    aliases: 'N/A'
                }, {
                    cmd: 'rule34, r34',
                    args: '[SearchTerms]',
                    ex: 'e!rule34\ne!rule34 touhou',
                    desc: 'Searchs your terms on the rule34',
                    aliases: 'r34'
                },
            ]
        }, {
            name: 'Random',
            commands: [
                {
                    cmd: '8ball',
                    args: '&lt;question&gt;',
                    ex: 'e!8ball are traps gay?',
                    desc: 'Asks the 8ball a question',
                    aliases: 'N/A'
                }, {
                    cmd: 'cat',
                    args: 'x',
                    ex: 'e!cat',
                    desc: 'Gets a random cat image',
                    aliases: 'N/A'
                }, {
                    cmd: 'coinflip',
                    args: 'x',
                    ex: 'e!coinflip',
                    desc: 'Flips a coin',
                    aliases: 'N/A'
                }, {
                    cmd: 'dice',
                    args: 'x',
                    ex: 'e!dice',
                    desc: 'Rolls a dice',
                    aliases: 'N/A'
                }, {
                    cmd: 'dog',
                    args: 'x',
                    ex: 'e!dog',
                    desc: 'Gets a random dog image',
                    aliases: 'N/A'
                }, {
                    cmd: 'rate',
                    args: '&lt;text&gt;',
                    ex: 'e!rate memes',
                    desc: 'Rates something',
                    aliases: 'N/A'
                }, {
                    cmd: 'roll',
                    args: 'x',
                    ex: 'e!roll',
                    desc: 'Rolls a number between 1 and 100',
                    aliases: 'N/A'
                },
            ]
        }, {
            name: 'Utility',
            commands: [
                {
                    cmd: 'image',
                    args: '&lt;SearchTerm&gt;',
                    ex: 'e!dice',
                    desc: 'Rolls a dice',
                    aliases: 'N/A'
                }, {
                    cmd: 'math',
                    args: 'x',
                    ex: 'e!dog',
                    desc: 'Gets a random dog image',
                    aliases: 'N/A'
                }, {
                    cmd: 'shorturl',
                    args: '&lt;text&gt;',
                    ex: 'e!rate memes',
                    desc: 'Rates something',
                    aliases: 'N/A'
                }
            ]
        }
    ]

console.log(commands);
for (var j = 0; j < commands.length; j++) {
    var table;
    switch (j) {
        case 0: table = document.getElementById('table-Social'); break;
        case 1: table = document.getElementById('table-Fun'); break;
        case 2: table = document.getElementById('table-Games'); break;
        case 3: table = document.getElementById('table-Info'); break;
        case 4: table = document.getElementById('table-Misc'); break;
        case 5: table = document.getElementById('table-Moderation'); break;
        case 6: table = document.getElementById('table-NSFW'); break;
        case 7: table = document.getElementById('table-Random'); break;
        case 8: table = document.getElementById('table-Utility'); break;
    }
    for (var i = 0; i < commands[j].commands.length; i++) {
        var row = table.insertRow(i + 1);

        var cmdcell = row.insertCell(0);
        var argscell = row.insertCell(1);
        var excell = row.insertCell(2);
        var desccell = row.insertCell(3);

        var cmd = commands[j].commands[i].cmd;
        var args = commands[j].commands[i].args;
        var ex = commands[j].commands[i].ex;
        var desc = commands[j].commands[i].desc;
        var aliases = commands[j].commands[i].aliases


        cmdcell.innerHTML = cmd;
        if (args != 'x') {
            argscell.innerHTML = '<code class=\'highlighter-rouge\'>' + args + '</code>';
        } else {
            argscell.innerHTML = args;
        }
        excell.innerHTML = '<code class=\'highlighter-rouge\'>' + ex + '</code>';
        desccell.innerHTML = desc;

        //Style
        argscell.style.textAlign = 'center';
    }
}
