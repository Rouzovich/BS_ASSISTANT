const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe?.user;

if (user) {
    document.getElementById("username").textContent =
        user.first_name + (user.last_name ? " " + user.last_name : "");

    if (user.photo_url) {
        document.getElementById("avatar").innerHTML =
            `<img src="${user.photo_url}" style="width:100%;height:100%;border-radius:50%;">`;
    }
}

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

        tg.HapticFeedback.impactOccurred("medium");

        const text = card.innerText.replace("\n"," ");

        switch (text) {

            case "🥊 Бойцы":
                tg.showAlert("Раздел «Бойцы» скоро появится!");
                break;

            case "🎯 События":
                tg.showAlert("Раздел «События» скоро появится!");
                break;

            case "▶ Играть":
                window.location.href = "game.html";
                break;

            case "🎫 Brawl Pass":
                tg.showAlert("Brawl Pass");
                break;

            case "👥 Команды":
                tg.showAlert("Команды");
                break;

            case "🛡 Клубы":
                tg.showAlert("Клубы");
                break;

            case "💚 Спонсировать":
                tg.showAlert("Спасибо за поддержку ❤️");
                break;

            case "🛒 Магазин":
                tg.showAlert("Магазин");
                break;

            case "⚡ Баффы":
                tg.showAlert("Баффы");
                break;

            case "🤝 Друзья":
                tg.showAlert("Друзья");
                break;

            case "👤 Профиль":
                tg.showAlert("Профиль");
                break;

        }

    });

});
