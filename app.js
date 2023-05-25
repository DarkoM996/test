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





