const clickButton = document.getElementById('locatorButton');
const output = document.getElementById('resultBtn');
let spanOutput = document.getElementById('textSmh');
let text = '';

clickButton.addEventListener('click', (Event) => {
    console.log('click');
    let width = Math.floor(Math.random() * 1000);
    let height = Math.floor(Math.random() * 1000);
    spanOutput.innerHTML('Random Number:' + Math.floor(Math.random() * 1000));
    spanOutput.style.backgroundColor = 'purple';
    spanOutput.style.width = `${width}px`;
    spanOutput.style.height = `${height}px`;
});

// clickButton.addEventListener('mouseenter'), () => {
//     console.log ('mouseenter');
//     backgroundColor = 'green';
// }

document.getElementById('locatorButton').onclick = function () {
    width = Math.floor(Math.random() * 1000);
    height = Math.floor(Math.random() * 1000);
    
}