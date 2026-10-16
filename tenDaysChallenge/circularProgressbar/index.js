const circle = document.querySelector('.progress-ring__circle');
const text = document.querySelector('.progress-text');

// circle.r.baseVal.value gives the radius attribute (r) of the SVG circle element as a number.
// In this SVG, <circle ... r="52" ... />, so it will be 52.
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

// strokeDasharray defines the pattern of dashes and gaps used to paint the outline of the circle.
// Here, we set it to the whole circumference so our "progress" bar can fill the entire circle.
circle.style.strokeDasharray = circumference;

// strokeDashoffset specifies how far into the dash pattern the stroke begins.
// By setting it to the circumference, the progress bar starts as empty (nothing shown).
circle.style.strokeDashoffset = circumference;

// Function to set progress
function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  text.textContent = `${percent}%`;
}

// Animate from 0 → 100%
let progress = 0;
const interval = setInterval(() => {
  setProgress(progress);
  progress++;
  if (progress > 100) clearInterval(interval);
}, 300);