const counter = document.getElementById('countdown');
const wishes = document.getElementById('txtWishes');
const loader = document.getElementById('loading');
const firework = document.getElementById('fireworks');

function updateCountdown(){
    // for (let count = 10; count > 0; count--) {
    //     // console.log(count);
    //     counter.innerHTML = count;
    //   }

    let timer = 10;
    var downloadTimer = setInterval(()=>{
        counter.innerHTML = timer;
        console.log(timer);
        if (--timer < 0) {
            counter.style.display = "none";
            firework.src = "./images/1233056.png";
            wishes.innerHTML = "Happy Developer's Day";
            clearInterval(downloadTimer);
        }else{
            
        }
    },1000);
}
updateCountdown();