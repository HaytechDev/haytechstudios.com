let countdown = 10;
let intervalId = null;

function updateCountdown() {
    const note = document.querySelector(".note");
    if (note) {
        note.innerHTML = `页面将在 ${countdown} 秒后自动跳转至 <a href="https://mcbbs.app">mcbbs.app</a>。`;
    }
}

function startCountdown() {
    updateCountdown();
    intervalId = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(intervalId);
            window.location.href = "https://mcbbs.app";
        } else {
            updateCountdown();
        }
    }, 1000);
}

function cancelRedirect() {
    if (intervalId) {
        clearInterval(intervalId);
    }

    // 隐藏 spinner、note 和取消跳转链接
    const spinner = document.querySelector(".spinner");
    const note = document.querySelector(".note");
    const cancelLink = document.querySelector(".cancel-link");

    if (spinner) spinner.style.display = "none";
    if (note) note.style.display = "none";
    if (cancelLink) cancelLink.style.display = "none";
}

startCountdown();
