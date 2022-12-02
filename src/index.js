const resetBtn = document.querySelector('#reset');
const toggleBtn = document.querySelector('#toggle');
const timer = document.querySelector('#timer');
let ss = 0;
let interval = null;
let flag = 'stop';

const resetTimer = () => {
  clearInterval(interval);
  ss = 0;
  timer.textContent = '00:00:00';
  toggleBtn.textContent = 'Start';
  toggleBtn.classList.replace('button--stop', 'button--start');
  flag = 'stop';
};

const updateTimer = () => {
  ss++;

  let hrs = Math.floor(ss / 3600);
  let mins = Math.floor((ss - (hrs * 3600)) / 60);
  let secs = ss % 60;

  if (hrs < 10) hrs = `0${hrs}`;
  if (mins < 10) mins = `0${mins}`;
  if (secs < 10) secs = `0${secs}`;

  timer.textContent = `${hrs}:${mins}:${secs}`;
};

const startTimer = () => {
  clearInterval(interval);

  interval = setInterval(updateTimer, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
}

const toggleTimer = () => {
  if (flag === 'stop') {
    startTimer();
    toggleBtn.textContent = 'Stop';
    toggleBtn.classList.replace('button--start', 'button--stop');
    flag = 'start';
  } else {
    stopTimer();
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.replace('button--stop', 'button--start');
    flag = 'stop';
  }
};

resetBtn.addEventListener('click', resetTimer);
toggleBtn.addEventListener('click', toggleTimer);
