// 탭 전환
const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".panel");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.dataset.target;
        const targetPanel = document.getElementById(`panel-${target}`);

        tabButtons.forEach(b => b.classList.remove("is-active"));
        button.classList.add("is-active");

        panels.forEach(p => p.classList.remove("is-active"));
        if (targetPanel) targetPanel.classList.add("is-active");
    });
});

// BGM 버튼 (UI만)
const bgmButton = document.querySelector(".bgm-toggle");
if (bgmButton) {
    bgmButton.addEventListener("click", () => {
        const pressed = bgmButton.getAttribute("aria-pressed") === "true";
        const next = !pressed;
        bgmButton.setAttribute("aria-pressed", String(next));
        bgmButton.textContent = next ? "Ⅱ 작은행복.mp3" : "▷ 작은행복.mp3";
    });
}

// 방명록
const guestbookForm = document.getElementById("guestbookForm");
const guestbookList = document.getElementById("guestbookList");

if (guestbookForm && guestbookList) {
    guestbookForm.addEventListener("submit", e => {
        e.preventDefault();
        const data = new FormData(guestbookForm);
        const nickname = (data.get("nickname") || "").toString().trim();
        const message = (data.get("message") || "").toString().trim();
        if (!nickname || !message) return;

        const li = document.createElement("li");
        li.innerHTML = `<span class="nick">${nickname}</span> · ${message}`;
        guestbookList.appendChild(li);

        guestbookForm.reset();
    });
}
