const countdownInput=document.querySelector('#countdown')
const showText=document.querySelector('.text')
let today = new Date();

for (let i = 0; i < 23; i++) {
    let time_ = document.querySelector(`.time_${i}`);

    switch (i) {
        case 0:
            time_.innerHTML = today;
            time_.nextElementSibling.innerHTML = `new Date()`;
            break;
        case 1:
            time_.innerHTML = today.toDateString();
            time_.nextElementSibling.innerHTML =`new Date().<span>toDateString</span>()`
            break;
        case 2:
            time_.innerHTML = today.toTimeString();
            time_.nextElementSibling.innerHTML =`new Date().<span>toTimeString</span>()`;
            break;
        case 3:
            time_.innerHTML = Date.now();
            time_.nextElementSibling.innerHTML =`Date.now()`;
            break;
        case 4:
            time_.innerHTML = new Date(
                today.getTime() - today.getTimezoneOffset() * 60000
            ).toISOString();
            time_.nextElementSibling.innerHTML =`<span class="convert">new Date(</span>new Date().<span>getTime</span>() - new Date().<span>getTimezoneOffset</span>() * 60000
            <span class="convert">)</span>.<span>toISOString</span>()`;
            break;
        case 5:
            time_.innerHTML = today.toLocaleDateString();
            time_.nextElementSibling.innerHTML =`new Date().<span>toLocaleDateString</span>()`;
            break;
        case 6:
            time_.innerHTML = today.toLocaleTimeString();
            time_.nextElementSibling.innerHTML =`new Date().<span>toLocaleTimeString</span>()`;
            break;
        case 7:
            time_.innerHTML = today.toLocaleString();
            time_.nextElementSibling.innerHTML =`new Date().<span>toLocaleString</span>()`;
            break;
        case 8:
            time_.innerHTML = new Date(today.toUTCString());
            time_.nextElementSibling.innerHTML =`<span class="convert">new Date(</span>new Date().<span>toUTCString</span>()<span class="convert">)</span>`;
            break;
        case 9:
            time_.innerHTML = today.getFullYear();
            time_.nextElementSibling.innerHTML =`new Date().<span>getFullYear</span>()`;
            break;
        case 10:
            time_.innerHTML = today.getMonth() + 1;
            time_.nextElementSibling.innerHTML =`new Date().<span>getMonth</span>()<span class="convert">+1</span>`;
            break;
        case 11:
            time_.innerHTML = today.getDate();
            time_.nextElementSibling.innerHTML =`new Date().<span>getDate</span>()`;
            break;
        case 12:
            time_.innerHTML = today.getDay();
            time_.nextElementSibling.innerHTML =`new Date().<span>getDay</span>()`;
            break;
        case 13:
            time_.innerHTML = today.getHours();
            time_.nextElementSibling.innerHTML =`new Date().<span>getHours</span>()`;
            break;
        case 14:
            time_.innerHTML = today.getMinutes();
            time_.nextElementSibling.innerHTML =`new Date().<span>getMinutes</span>()`;
            break;
        case 15:
            time_.innerHTML = today.getSeconds();
            time_.nextElementSibling.innerHTML =`new Date().<span>getSeconds</span>()`;
            break;
        case 16:
            time_.innerHTML = today.getTime();
            time_.nextElementSibling.innerHTML =`new Date().<span>getTime</span>()`;
            break;
        case 17:
            time_.innerHTML = today.getMilliseconds();
            time_.nextElementSibling.innerHTML =`new Date().<span>getMilliseconds</span>()`;
            break;
        case 18:
            time_.innerHTML = new Date(Date.parse('Aug 08 2022'));
            time_.nextElementSibling.innerHTML =`<span class="convert">new Date(</span>Date.<span>parse</span>('Aug 08 2022')<span class="convert">)</span>`;
            break;
        case 19:
            time_.innerHTML = new Date(new Date().setFullYear('1999'));
            time_.nextElementSibling.innerHTML =`<span class="convert">new Date(</span>new Date().<span>setFullYear</span>('1999')<span class="convert">)</span>`;
            break;
        case 20:
            time_.innerHTML = new Date(new Date(2022,02,22).setMonth(0));
            time_.nextElementSibling.innerHTML =`<span class="convert">new Date(</span>new Date(2022,09,09).<span>setMonth</span>('0')<span class="convert">)</span>`;
            break;
        case 21:
            time_.innerHTML = new Date(new Date('2020-01-01').setDate('31'));
            time_.nextElementSibling.innerHTML =`<span class="convert">new Date(</span>new Date('2020-01-01').<span>setDate</span>('31')<span class="convert">)</span>`;
            break;
        case 22:
            time_.innerHTML = new Date(new Date().setTime(today.getTime() + 10*60*1000 ));
            time_.nextElementSibling.innerHTML =`<span class="convert">new Date(</span>new Date().<span>setTime</span>(new Date().getTime() + <span>10</span>*60*1000 )<span class="convert">)</span>`;
            break;
    }
    time_.addEventListener("click", clickShow);
}

function clickShow(e) {
    e.target.nextElementSibling.style.display = "block";
    setTimeout(() => {
        e.target.nextElementSibling.style.display = "none";
    }, 10000);
}

countdownInput.addEventListener('keypress',function(e){
    if(countdownInput.value.length>3){
        e.preventDefault();
    }
})
// countdownInput.addEventListener('input',inputText)
// countdownInput.addEventListener('change',inputText)

function inputText(e){
    showText.innerHTML=''
    if(e.target.value.length<3){
        if(parseInt(e.target.value)<60){
            showText.innerHTML=countdownInput.value
        }else{
            return
        }
    }else{
        // return
        e.preventDefault();
    }
    
    // if(e.target.value.trim().length<3){
    //      if(e.target.value.trim()!=''){
    //         showText.innerHTML=countdownInput.value
    //     }
    // }else{
    //     e.preventDefault();
    // }
    
}

