// Elements
const dayElement = document.querySelector('#weekDay');
const currUTCElement = document.querySelector('#currUTC');

// Variables
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Functions
const getCurrentDayOfWeek = () => {
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
};

const updateTime = () => {
  const now = new Date();
  const hours = now.getUTCHours().toString().padStart(2, '0');
  const minutes = now.getUTCMinutes().toString().padStart(2, '0');
  const seconds = now.getUTCSeconds().toString().padStart(2, '0');
  currUTCElement.textContent = `${hours}:${minutes}:${seconds}`;
};

const init = () => {
  dayElement.textContent = getCurrentDayOfWeek();
  setInterval(updateTime, 1000);
};

// Function on page load
init();
