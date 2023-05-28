document.getElementById('clickButton').addEventListener('click', () => {
    console.log('click')
    document.getElementById('clickOutput').style.backgroundColor='blue'
})
// Get DocumentbyId (ime na button, add eventlistener e tip na event)
document.getElementById('doubleClick').addEventListener('click', () => {
    console.log('click');
    //getelementbyid e ime na div
    document.getElementById('dbloutput').style.backgroundColor='green'
})

document.getElementById('onhover').addEventListener('mouseenter', () => {
    console.log('mouseenter');
    document.getElementById('mouseenter').style.backgroundColor='grey'
})

document.getElementById('clickaButton').addEventListener('click', () => {
    console.log('click')
    document.getElementById('clickanOutput').style.backgroundColor='red'
})

document.getElementById('buttonOne').addEventListener('mouseenter', () => {
    console.log('dbclick');
    document.getElementById('outputOne').style.backgroundColor='orange';
})

document.getElementById('buttonOne').addEventListener('mouseleave', () => {
    console.log('mouseleave');
    document.getElementById('outputTwo').style.backgroundColor='purple';
})

//This example was found from Mozila's Javascript Documentation

const card = document.querySelector("aside");

card.addEventListener("dblclick", (e) => {
  card.classList.toggle("large");
});

//Attempt to recreate this

const form = document.querySelector("form");


addEventListener("dblclick", (e) => {
    form.classList.toggle("large2");
});

//After I made this, when i click on the first one..both activate

document.getElementById("focusButton").addEventListener("click", () => {
    document.getElementById("myTextField").focus();
  });

document.getElementById("focusThisButton").addEventListener("click", () => {
    document.getElementById("myownTextField").focus();
});

//This example worked on my own when I removed the second bracket instead of click which is weird





