
const input = document.getElementById("input");
const output = document.getElementById("output");

const responses = {
    "sign": "Redirecting to /pages/sign.html",
    "noise": "Redirecting to /pages/noise.html",
    "digital": "Redirecting to /pages/digital.html",
    "print": "Redirecting to /pages/print.html",
    "calligraphy": "Redirecting to /pages/calligraphy.html"
};

function typeEffect(text, callback) {
    let i = 0;
    let interval = setInterval(() => {
        output.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            output.textContent += "\n";
            callback && callback();
        }
    }, 25);
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const cmd = input.value.trim();
        input.value = "";
        output.textContent += ">_ " + cmd + "\n";
        if (responses[cmd]) {
            typeEffect(responses[cmd], () => {
                setTimeout(() => window.location.href = "/pages/" + cmd + ".html", 1000);
            });
        } else {
            typeEffect("Unknown command: " + cmd);
        }
    }
});
