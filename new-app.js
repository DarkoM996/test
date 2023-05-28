// Define variable
let clickInitiator = document.getElementById('hideBtn');
let output = document.getElementsByClassName('hide'); // Use class="hide"
let spanOutput = document.getElementById('showText');
let text = '';
// Add listners
clickInitiator.addEventListener('click', (event) => {
  console.log('click');
  let width = Math.floor(Math.random() * 100);
  let height = Math.floor(Math.random() * 100);
  spanOutput.innerHTML = 'Random Number:' + Math.floor(Math.random() * 100);
  spanOutput.style.backgroundColor = 'green';
  spanOutput.style.width = `${width}px`;
  spanOutput.style.height = `${height}px`;
});

clickInitiator.addEventListener('mouseover', () => {
  console.log('Double click');
  console.log(width);
  // width and height are not being called here - Local variables
  // Line 2-5 are global
});
