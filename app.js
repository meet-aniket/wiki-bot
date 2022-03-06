require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const { botHandler } = require("./botHandler");


const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

botHandler(bot);
