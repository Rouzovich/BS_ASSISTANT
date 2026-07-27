from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes

from config import BOT_TOKEN, WEB_APP_URL


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):

    keyboard = [
        [
            InlineKeyboardButton(
                text="🎮 Открыть BS Assistant",
                web_app=WebAppInfo(url=WEB_APP_URL)
            )
        ]
    ]

    await update.message.reply_text(
        f"""👋 Привет, {update.effective_user.first_name}!

Я BS Assistant — бот-помощник по игре Brawl Stars.

Выбери раздел ниже 👇""",
        reply_markup=InlineKeyboardMarkup(keyboard)
    )


def main():

    app = Application.builder().token(BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", start))

    print("✅ BS Assistant запущен!")

    app.run_polling()


if __name__ == "__main__":
    main()
