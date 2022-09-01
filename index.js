const express = require('express');
const app = express();
app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.listen(
  () =>  console.log("The API IS Running On https://api.mortexagsite.cyou")

)

app.get('/github', (req, res) => {
  res.status(200).send({
    my_account:"https://github.com/MortexAG",
    my_site: 'https://github.com/MortexAG/mortexagsite',
    currency_converter: 'https://github.com/MortexAG/Currency-Converter',
    file_encryption_tool:'https://github.com/MortexAG/Reactive-File-encryption-decryption',
    telegram_bots: {
      the_repo:'https://github.com/MortexAG/Telegram-Bots',
      clock_bot:'https://github.com/MortexAG/Telegram-Bots/tree/main/Clock%20Bot',
      daily_message_bot:'https://github.com/MortexAG/Telegram-Bots/tree/main/Daily%20Message%20Bot',
      document_converter_bot:'https://github.com/MortexAG/Telegram-Bots/tree/main/Document-Converter',
      weather_bot:'https://github.com/MortexAG/Telegram-Bots/tree/main/Weather%20Bot',
      file_encryption_tool_bot:'https://github.com/MortexAG/Reactive-File-encryption-decryption',
      youtube_audio_downloader_bot:'https://github.com/MortexAG/Telegram-Bots/tree/main/Youtube%20Video%20To%20Audio%20Downloader',
    }
  })
});

app.get('/replit', (req, res) => {
  res.status(200).send({
    my_account:'https://replit.com/@MortexAG',
    discord_bots:{ calm_gamers_music_bot:'https://replit.com/@MortexAG/CalmGamersBot',
calm_gamers_bot_commands:'https://replit.com/@MortexAG/CalmGamersBotCommands',
      gamers_music_bot_v1:'https://replit.com/@MortexAG/GamersMusicBot',
      gamers_music_bot_v2:'https://replit.com/@MortexAG/GamersMusicBot2',

gamers_music_bot_commands:'https://replit.com/@MortexAG/GamersMusicBotCommand'
                  
    }
    })
});

/* Some Code To Make A Post Request (will be added later) */
/*
app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
  const { token } = req.headers;
  if (token != 'mortexag')
    res.status(418).send({ error: "you're not authorized to send on this api" })
  if (!logo) {
    res.status(418).send({ message: 'logo is required' })
  }

  res.send({
    tshirt: `shirto with your logo  "${logo}" and ID of ${id} `,
  });
});

*/