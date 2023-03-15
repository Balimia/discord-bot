# Discord bot setup

Run the following commands in the terminal

- `touch ./src/config.json`

```json
{
"TOKEN": "the-super-secret-bot-token",
"PRODUCTION": false,
"APPLICATION_ID": "1072177712682250240",
"TEST_SERVER_ID": "your-discord-server-id"
}
```

- `npm i`

If you don't have Docker installed:

- `npm run dev`

If you have Docker installed:

- `npm run build`

- `docker-compose up`
