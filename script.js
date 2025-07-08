document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("commandInput");
  const output = document.getElementById("output");

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const command = input.value.trim();
      output.innerHTML += "> " + command + "\n";
      input.value = "";

      if (command === "readme") {
        window.location.href = "readme.html";
      } else {
        output.innerHTML += "Unknown command: " + command + "\n";
      }
    }
  });
});
