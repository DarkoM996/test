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









