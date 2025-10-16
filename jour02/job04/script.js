const keylogger = document.getElementById("keylogger");


document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        keylogger.value = keylogger.value.slice(0, -1);
        return;
    }
    
    if (!/^[a-zA-Z]$/.test(event.key)) return;
    keylogger.value += event.key;
});

