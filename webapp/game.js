const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const profile = document.querySelector(".name");

const user = tg.initDataUnsafe?.user;

if (user) {
    profile.textContent = user.first_name;
}

document.querySelector(".play").addEventListener("click", () => {
    tg.HapticFeedback.impactOccurred("heavy");
    tg.showAlert("🚀 Поиск матча скоро будет доступен!");
});

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        tg.HapticFeedback.selectionChanged();
    });
});
