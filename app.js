

function increment(){
    var counter = document.getElementById("counter").innerText;
    var sriToNumber = parseInt(counter)
    document.getElementById("counter").innerText = sriToNumber + 1 ;
}

function decrement(){
    var counter = document.getElementById("counter").innerText;
    var sriToNumber = parseInt(counter)
    document.getElementById("counter").innerText = sriToNumber - 1 ;
}