

function goAnim(){
    const bar = document.getElementById("loading_bar");
    bar.style.width = '0';

    const text = document.getElementById('percent');
    text.style.color = "gray";

    let time = +prompt('Enter duration', '10');

    let percent = 1;

    let timer = setInterval(()=>{
        if(percent === 100)
            clearInterval(timer)
        if(percent === 60)
            text.style.color = 'white';
        text.innerHTML = percent.toString()+'%';
        percent++;
    }, time/100*1000)


   let anim = bar.animate([{width:"0"}, {width: '100%'}],
       {
           duration:time*1000,
           easing:'linear'
       })

    let FP = anim.onfinish=()=>{
        console.log('Finished')
        bar.style.width = '100%';
        anim.cancel()
        document.getElementById('btn').disabled = true;
    }
}

