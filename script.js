
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("commandInput");
    const output = document.getElementById("output");

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const command = input.value.trim();
            output.innerHTML += `<div>&gt; ${command}</div>`;
            input.value = "";

            if (command === "digital") {
                window.location.href = "pages/digital.html";
            } else if (command === "print") {
                window.location.href = "pages/print.html";
            } else if (command === "calligraphy") {
                window.location.href = "pages/calligraphy.html";
            } else {
                output.innerHTML += `<div style='color:red'>Unknown command: ${command}</div>`;
            }
        }
    });
});
