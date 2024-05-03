var entryEL = document.getElementById('entry-el');
console.log(entryEL);

var countEL = document.getElementById('count-el');
console.log(countEL);

var save1 = document.getElementById('save-1');
console.log(save1);

var count = 0

function increment() {
    console.log('button was clicked');
    count += 1
    countEL.innerText = count

}

function save() {
    console.log('button was clciked ')
    var add = " - " + count
    entryEL.textContent += add
    countEL.textContent = 0 
  
    
}