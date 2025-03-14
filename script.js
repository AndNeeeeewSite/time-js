//              1.
output1 = document.querySelector('.timer-out-1')
button1 = document.querySelector('.start-button-1')
button1.addEventListener('click',function(){
    button1.setAttribute("disabled", "");
    htimer = 60
    hourTimer = setInterval(function(){
        htimer--
        output1.textContent = 'Time:' + htimer + 'm.'
        if(htimer==htimer/2){
            alert('Пройшло половина таймера')
        }
        if(htimer==0){
            clearInterval(hourTimer)
            button1.removeAttribute("disabled");
        }
    },60000)
})
//                  2.
output2 = document.querySelector('.timer-out-2')
button2 = document.querySelector('.start-button-2')
button2.addEventListener('click',function(){
    button2.setAttribute("disabled", "");
    mstimer = 15000
    msTimer = setInterval(function(){
        mstimer--
        output2.textContent = 'Time:' + mstimer + 'ms'
        if(mstimer==10000){
            colors = ["#FF0000","#FFA500","#FFFF00","#008000", "#87CEEB", "#0000FF"," #8A2BE2","black"];
            color = 0
            anim = setInterval(function(){
                output2.style.color = colors[color]
                color++
            },1000)
        }   
        if(mstimer==0){
            clearInterval(msTimer)
            button2.removeAttribute("disabled");
        }
    },1)
})      