var commands =
    [
        {
            name: 'Fun',
            commands: [
                {
                    cmd: 'cookie',
                    args: '&lt;@Member&gt;',
                    ex: 'e!cookie @User#0001',
                    desc: 'Gives a cookie to someone'
                }, {
                    cmd: 'dicksize',
                    args: '[@Member]',
                    ex: 'e!dicksize @User#0001',
                    desc: 'What\'s your penis lenght? ( ͡° ͜ʖ ͡°)'
                }, {
                    cmd: 'jokes',
                    args: 'x',
                    ex: 'e!jokes',
                    desc: 'Bad jokes xd'
                }, {
                    cmd: 'lenny',
                    args: 'x',
                    ex: 'e!lenny',
                    desc: 'Sends the lenny face'
                }, {
                    cmd: 'owo',
                    args: 'x',
                    ex: 'e!owo',
                    desc: 'You go OwO'
                }, {
                    cmd: 'pat',
                    args: '&lt;@Member&gt;',
                    ex: 'e!pat @User#0001',
                    desc: 'Gives a headpat to someone'
                }, {
                    cmd: 'reverse',
                    args: '&lt;text&gt;',
                    ex: 'e!reverse very nice',
                    desc: 'Returns the given text but reversed'
                }, {
                    cmd: 'rps',
                    args: '&lt;@Member&gt;',
                    ex: 'e!rps @User#0001',
                    desc: 'Play Rock, Paper and Scissors'
                }, {
                    cmd: 'rr',
                    args: '&lt;@Member&gt;',
                    ex: 'e!rps @User#0001',
                    desc: 'Play Russian Roulette'
                }, {
                    cmd: 'sandwich',
                    args: '&lt;@Member&gt;',
                    ex: 'e!sandwich @User#0001',
                    desc: 'Gives a sandwich to someone'
                }, {
                    cmd: 'say',
                    args: '&lt;text&gt;',
                    ex: 'e!say òwó',
                    desc: 'Says whatever you want'
                }, {
                    cmd: 'touch',
                    args: '&lt;@Member&gt;',
                    ex: 'e!touch @User#0001',
                    desc: 'Touch someone'
                }, {
                    cmd: 'waifu',
                    args: 'x',
                    ex: 'e!waifu',
                    desc: 'Waifu or laifu?'
                }
            ]
        }, {
            name: 'Games',
            commands: [
                {
                    cmd: 'osu',
                    args: '&lt;osu!Username&gt;\n[Modifiers]',
                    ex: 'e!osu peppy --mode std --best',
                    desc: 'Retieves your profile, check Modifiers to learn more'
                }, {
                    cmd: 'osuBest',
                    args: '&lt;osu!Username&gt;\n[Modifiers]',
                    ex: 'e!osuBest peppy --mode std --best',
                    desc: 'Retieves your best PP score, check Modifiers to learn more'
                },
            ]
        }, {
            name: 'Info',
            commands: [
                {
                    cmd: 'avatar',
                    args: '[@Member]',
                    ex: 'e!avatar @User#0001',
                    desc: 'Gets your/someone ‘s Avatar'
                }, {
                    cmd: 'channel',
                    args: '[#channel]',
                    ex: 'e!channel',
                    desc: 'Info about a channel'
                }, {
                    cmd: 'emoji',
                    args: '&lt;Emoji&gt;',
                    ex: 'e!emoji :kappa:',
                    desc: 'Info about an emoji'
                }, {
                    cmd: 'role',
                    args: '&lt;Role&gt;',
                    ex: 'e!role @Admins',
                    desc: 'Info about a role'
                }, {
                    cmd: 'server',
                    args: 'x',
                    ex: 'e!server',
                    desc: 'Info about the server'
                }, {
                    cmd: 'stats',
                    args: '[@Member]',
                    ex: 'e!stats @User#0001',
                    desc: 'Show your or someone else\'s stats'
                }, {
                    cmd: 'user',
                    args: '[@Member]',
                    ex: 'e!user @User#0001',
                    desc: 'Info about you/someone'
                },
            ]
        }, {
            name: 'Misc',
            commands: [
                {
                    cmd: 'help',
                    args: '[Category Name]',
                    ex: 'e!help Fun',
                    desc: 'It displays a list of categories, if you provide a category name then it will give all the commands on that category'
                }, {
                    cmd: 'info',
                    args: 'x',
                    ex: 'e!info',
                    desc: 'Shows info about the bot, like RAM, servers and member count, etc'
                }, {
                    cmd: 'invite',
                    args: 'x',
                    ex: 'e!invite',
                    desc: 'Send the invitation link to add the bot to your server'
                }, {
                    cmd: 'ping',
                    args: 'x',
                    ex: 'e!ping',
                    desc: 'Pings the bot and the Discord API'
                }, {
                    cmd: 'pong',
                    args: 'x',
                    ex: 'e!pong',
                    desc: 'Pongs the bot and the Discord API'
                }, {
                    cmd: 'uptime',
                    args: 'x',
                    ex: 'e!uptime',
                    desc: 'Displays the uptime since the bot had the READY event'
                }, {
                    cmd: 'wikis',
                    args: 'x',
                    ex: 'e!wikis',
                    desc: 'Sends all the wikis available for the bot'
                }
            ]
        }, {
            name: 'Moderation',
            commands: [
                {
                    cmd: 'ban',
                    args: '&lt;@Member&gt;',
                    ex: 'e!ban @User#0001',
                    desc: 'Bans someone'
                }, {
                    cmd: 'kick',
                    args: '&lt;@Member&gt;',
                    ex: 'e!kick @User#0001',
                    desc: 'Kicks someone'
                }, {
                    cmd: 'mute',
                    args: '&lt;@Member&gt;',
                    ex: 'e!mute @User#0001',
                    desc: 'Mutes someone'
                }, {
                    cmd: 'prune',
                    args: 'x',
                    ex: 'e!prune 16',
                    desc: 'Deletes a count of messages in a channel'
                }, {
                    cmd: 'unmute',
                    args: '&lt;@Member&gt;',
                    ex: 'e!unmute @User#0001',
                    desc: 'Unmutes someone'
                },
            ]
        }, {
            name: 'NSFW',
            commands: [
                {
                    cmd: 'danbooru',
                    args: '[SearchTerms]',
                    ex: 'e!danbooru\ne!danbooru touhou',
                    desc: 'Searchs on danbooru with your terms, read <a href=\'https://danbooru.donmai.us/posts?tags=help%3Acensored_tags\'&>blocked tags</a&>'
                }, {
                    cmd: 'rule34, r34',
                    args: '[SearchTerms]',
                    ex: 'e!rule34\ne!rule34 touhou',
                    desc: 'Searchs your terms on the rule34, <code class=\'highlighter- rouge\'>r34</code> is an alias'
                },
            ]
        }, {
            name: 'Random',
            commands: [
                {
                    cmd: '8ball',
                    args: '&lt;question&gt;',
                    ex: 'e!8ball are traps gay?',
                    desc: 'Asks the 8ball a question'
                }, {
                    cmd: 'cat',
                    args: 'x',
                    ex: 'e!cat',
                    desc: 'Gets a random cat image'
                }, {
                    cmd: 'coinflip',
                    args: 'x',
                    ex: 'e!coinflip',
                    desc: 'Flips a coin'
                }, {
                    cmd: 'dice',
                    args: 'x',
                    ex: 'e!dice',
                    desc: 'Rolls a dice'
                }, {
                    cmd: 'dog',
                    args: 'x',
                    ex: 'e!dog',
                    desc: 'Gets a random dog image'
                }, {
                    cmd: 'rate',
                    args: '&lt;text&gt;',
                    ex: 'e!rate memes',
                    desc: 'Rates something'
                }, {
                    cmd: 'roll',
                    args: 'x',
                    ex: 'e!roll',
                    desc: 'Rolls a number between 1 and 100'
                },
            ]
        }, {
            name: 'Utility',
            commands: [
                {
                    cmd: 'image',
                    args: '&lt;SearchTerm&gt;',
                    ex: 'e!dice',
                    desc: 'Rolls a dice'
                }, {
                    cmd: 'math',
                    args: 'x',
                    ex: 'e!dog',
                    desc: 'Gets a random dog image'
                }, {
                    cmd: 'shorturl',
                    args: '&lt;text&gt;',
                    ex: 'e!rate memes',
                    desc: 'Rates something'
                }
            ]
        }
    ]

console.log(commands);
for (var j = 0; j < commands.length; j++) {
    var table;
    switch (j) {
        case 0: table = document.getElementById('table-Fun'); break;
        case 1: table = document.getElementById('table-Games'); break;
        case 2: table = document.getElementById('table-Info'); break;
        case 3: table = document.getElementById('table-Misc'); break;
        case 4: table = document.getElementById('table-Moderation'); break;
        case 5: table = document.getElementById('table-NSFW'); break;
        case 6: table = document.getElementById('table-Random'); break;
        case 7: table = document.getElementById('table-Utility'); break;
    }
    for (var i = 0; i < commands[j].commands.length; i++) {
        var row = table.insertRow(i+1);

        var cmdcell = row.insertCell(0);
        var argscell = row.insertCell(1);
        var excell = row.insertCell(2);
        var desccell = row.insertCell(3);

        var cmd = commands[j].commands[i].cmd;
        var args = commands[j].commands[i].args;
        var ex = commands[j].commands[i].ex;
        var desc = commands[j].commands[i].desc;


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
