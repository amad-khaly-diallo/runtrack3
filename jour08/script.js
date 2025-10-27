const clockDisplay = document.getElementById('clock-display');
const timerUp = document.getElementById('timer-up');
const timerDown = document.getElementById('timer-down');
const timerStartBtn = document.getElementById('timer-start');
const timerStopBtn = document.getElementById('timer-stop');
const timerDisplay = document.getElementById('timer-display');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('secondes');

// Horloge
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    const delay = 1000 - now.getMilliseconds();
    setTimeout(updateClock, delay);
}
updateClock();
// ========================================Minuteur==========================================
function formatTime(totalSeconds) {
    totalSeconds = Math.max(0, Math.floor(totalSeconds));
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    const total = Number(minutesInput.value || 0) * 60 + Number(secondsInput.value || 0);
    timerDisplay.textContent = formatTime(total);
}

function lockTimerControls() {
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    timerUp.disabled = true;
    timerDown.disabled = true;
}

function unlockTimerControls() {
    minutesInput.disabled = false;
    secondsInput.disabled = false;
    timerUp.disabled = false;
    timerDown.disabled = false;
}

// Boutons top / down
timerUp.addEventListener('click', () => {
    let secs = Number(secondsInput.value || 0) + 1;
    let mins = Number(minutesInput.value || 0);
    if (secs >= 60) {
        secs = 0;
        mins += 1;
    }
    minutesInput.value = mins;
    secondsInput.value = secs;
    updateDisplay();
});

timerDown.addEventListener('click', () => {
    let total = Number(minutesInput.value || 0) * 60 + Number(secondsInput.value || 0);
    total = Math.max(0, total - 1);
    minutesInput.value = Math.floor(total / 60);
    secondsInput.value = total % 60;
    updateDisplay();
});

// Minuteur Démarrer / Stop
let timerInterval = null;

timerStartBtn.addEventListener('click', () => {
    if (timerInterval) return;
    let total = Number(minutesInput.value || 0) * 60 + Number(secondsInput.value || 0);
    if (total <= 0) return;

    lockTimerControls();

    timerInterval = setInterval(() => {
        total--;
        minutesInput.value = Math.floor(total / 60);
        secondsInput.value = total % 60;
        updateDisplay();

        if (total <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            unlockTimerControls();
            alert("⏰ Le temps est écoulé !");
        }
    }, 1000);
});

timerStopBtn.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    unlockTimerControls();
});

// Initialisation
updateDisplay();


// ========================================= Chrono =======================================================
const displayChrono = document.getElementById('chrono-display');
const chronoStartStop = document.getElementById('chrono-toggle');
const chronoLap = document.getElementById('chrono-lap');
const chronoReset = document.getElementById('chrono-reset');
const lapsContainer = document.getElementById('lap-list');

let hour = 0;
let minutes = 0;
let secondes = 0;

let chronoInterval = null;
let running = false;

// Pour calculer les tours
let lastLapTotalSeconds = 0;

function format(n) {
    return String(n).padStart(2, "0");
}

function getTotalSeconds() {
    return hour * 3600 + minutes * 60 + secondes;
}

function formatTime(totalSeconds) {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;
    return `${format(h)}:${format(m)}:${format(s)}`;
}

function updateChrono() {
    secondes++;

    if (secondes >= 60) {
        secondes = 0;
        minutes++;
    }

    if (minutes >= 60) {
        minutes = 0;
        hour++;
    }

    displayChrono.textContent = `${format(hour)}:${format(minutes)}:${format(secondes)}`;
}

// Start / Stop
chronoStartStop.addEventListener('click', () => {
    if (!running) {
        chronoInterval = setInterval(updateChrono, 1000);
        running = true;
    } else {
        clearInterval(chronoInterval);
        running = false;
    }
});

// Lap (Tours)
chronoLap.addEventListener('click', () => {
    const currentTotal = getTotalSeconds();
    const lapTime = currentTotal - lastLapTotalSeconds;
    lastLapTotalSeconds = currentTotal;

    const li = document.createElement("li");
    li.textContent = `Tour : ${formatTime(lapTime)}`;
    lapsContainer.appendChild(li);
});

// Reset
chronoReset.addEventListener('click', () => {
    hour = 0;
    minutes = 0;
    secondes = 0;
    clearInterval(chronoInterval);
    running = false;

    lastLapTotalSeconds = 0;
    lapsContainer.innerHTML = "";

    displayChrono.textContent = `00:00:00`;
});


// ===================== Alarm =======================================

const alarmTimeInput = document.getElementById('alarm-time');
const alarmMsgInput = document.getElementById('alarm-message');
const addAlarmBtn = document.getElementById('add-alarm');
const alarmList = document.getElementById('alarm-list');

let alarms = [];

// Convertit HH:MM → Date d’aujourd’hui
function parseTimeToDate(timeStr) {
    const [h, m] = timeStr.split(":").map(Number);
    const now = new Date();
    const alarmDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        h,
        m,
        0,
        0
    );
    return alarmDate;
}

function updateAlarmList() {
    alarmList.innerHTML = "";

    const now = new Date();

    alarms.forEach((alarm, index) => {
        const li = document.createElement("li");

        const diff = alarm.timeDate - now;

        let status = "";
        if (diff <= 0) {
            status = "Passée";
        } else {
            const mins = Math.floor(diff / 60000);
            const secs = Math.floor((diff % 60000) / 1000);
            status = `Dans ${mins}m ${secs}s`;
        }

        li.textContent = `${alarm.timeText} - ${alarm.message} (${status})`;
        alarmList.appendChild(li);
    });
}

function checkAlarms() {
    const now = new Date();

    alarms.forEach(alarm => {
        if (!alarm.triggered && now >= alarm.timeDate) {
            alarm.triggered = true;
            alert("Réveil : " + alarm.message);
        }
    });

    updateAlarmList();
}

setInterval(checkAlarms, 1000);

// Ajouter une alarme
addAlarmBtn.addEventListener('click', () => {
    const timeValue = alarmTimeInput.value;
    if (!timeValue) return;

    const msgValue = alarmMsgInput.value.trim() || "Réveil !";
    const alarmDate = parseTimeToDate(timeValue);

    alarms.push({
        timeText: timeValue,
        timeDate: alarmDate,
        message: msgValue,
        triggered: false
    });

    alarmTimeInput.value = "";
    alarmMsgInput.value = "";

    updateAlarmList();
});

