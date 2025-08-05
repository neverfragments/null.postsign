document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("commandInput");
  const output = document.getElementById("output");

  function printOutput(text, cls = "") {
    const div = document.createElement("div");
    div.textContent = text;
    if (cls) div.classList.add(cls);
    output.appendChild(div);
  }

  function handleCommand(command) {
    switch (command.toLowerCase()) {
      case "postprint":
        window.location.href = "postprint.html";
        break;
      case "postsign":
        window.location.href = "postsign.html";
        break;
      case "larg_v01":
        window.location.href = "larg_v01.html";
        break;
      case "readme":
        window.location.href = "readme.html";
        break;
      default:
        printOutput("Unknown command: " + command, "error");
    }
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = input.value.trim();
      printOutput("> " + command);
      handleCommand(command);
      input.value = "";
    }
  });
});