let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;
let laps = [];

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  } else {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 10);
  }
}

function pauseResume() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  } else {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 10);
  }
}

function reset() {
  clearInterval(timer);
  isRunning = true;
  elapsedTime = 0;
  laps = [];
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  if (isRunning) {
    laps.push(formatTime(elapsedTime));
    const lapList = document.getElementById('laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = laps[laps.length - 1];
    lapList.appendChild(lapItem);
  }
}

function updateDisplay() {
  elapsedTime = Date.now() - startTime;
  document.getElementById('display').textContent = formatTime(elapsedTime);
}

function formatTime(time) {
  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((time % 1000) / 10);
  
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}
