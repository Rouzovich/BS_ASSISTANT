const tg = window.Telegram.WebApp;

tg.expand();

const user = tg.initDataUnsafe?.user;

if (user) {
    const title = document.querySelector(".header h1");
    const text = document.querySelector(".header p");

    title.innerHTML = `👋 Привет, ${user.first_name}!`;
    text.innerHTML = "Я BS Assistant — бот-помощник по игре Brawl Stars.";
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {

        tg.HapticFeedback.impactOccurred("medium");

        alert(button.innerText);
    });
});
