const parallax = document.querySelector('.header'),
      clouds = document.querySelectorAll('.cloud'),
      boat = document.querySelector('.boat'),
      fantasy = document.querySelector('.fantasy'),
      title = document.querySelector('.title');

window.addEventListener('scroll', function () {
    let windowY = window.scrollY
    clouds.forEach((cloud)=>{
        let cloudSpeed = cloud.getAttribute('data-speed')
        cloud.style.transform = `translateX(${windowY * cloudSpeed}px)`
    })
    let boatSpeed = boat.getAttribute('data-speed')
    boat.style.transform = `translateX(${windowY * boatSpeed}px)`
    fantasy.style.objectPosition = `0 ${windowY / 10}%`
    title.style.opacity = `${windowY/500}`
})

const space = document.querySelector('.space'),
      layers = document.querySelectorAll('.layers');

space.addEventListener('mousemove', function (e) {

    layers.forEach((layer)=>{
        let layerSpeed = layer.getAttribute('data-speed')
        let x = (window.innerWidth - e.pageX * layerSpeed) /10
        let y = (window.innerHeight - e.pageY * layerSpeed) /10
        layer.style.transform = `translate(${x}px, ${y}px)`
    })
})


const timer = document.querySelector('.timer'),
      timerNum = document.querySelectorAll('.timer__num');

window.addEventListener('scroll', function stopNum(e) {
    // console.log(pageYOffset);
    // console.log(timer.offsetTop - timer.clientHeight);
    // console.log(pageYOffset >= (timer.offsetTop - timer.clientHeight * 5));
    // console.log(timer.clientHeight);
    // console.log(timer.offsetTop);
    if (pageYOffset >= (timer.offsetTop - timer.clientHeight * 4)) {
        timerNum.forEach(num =>{
            let dataNum = num.getAttribute('data-num')
            function numPlus(i = 0) {
                num.innerHTML = i
                i++
                if (i <= dataNum) {
                    setTimeout(() => {
                        numPlus(i)
                    }, 50);
                }
            }numPlus()
        })
        this.removeEventListener('scroll', stopNum)

    }



})







































// let fullText = title.innerHTML
// title.innerHTML = ''
// function writing(i = 0) {
//     title.innerHTML += fullText[i]
//     i++
//     if (i < fullText.length) {
//         setTimeout(() => {
//             writing(i)
//         }, 100);
//     }

// }writing()