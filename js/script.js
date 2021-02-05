// console.dir(document) - показывает html файл как обьект
// console.info(document.querySelectorAll())


const hour = document.querySelector('.h'),
        min = document.querySelector('.m'),
        sec = document.querySelector('.s')

function clock(){
    const time = new Date(),
        hours = time.getHours() * 30, 
        minutes = time.getMinutes() * 6,
        seconds = time.getSeconds() * 6

    hour.style.transform = `rotate(${hours}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    sec.style.transform = `rotate(${seconds}deg)`
    
    // console.info(hours, minutes ,seconds)

    setTimeout(clock, 1000)
}

clock()

const tabLinks = document.querySelectorAll('.tabsItem'),
    tabContent = document.querySelectorAll('.tabsContentItem')

for(const key in tabLinks){

        if(typeof tabLinks[key] === 'object')
        tabLinks[key].addEventListener('click', function(){
                for(let i = 0; i < tabLinks.length; i++){
                    tabLinks[i].classList.remove('active')
                    tabContent[i].classList.remove('active')
                }
                addActive(this, tabContent[key])
        })
}


function addActive(link, content, starte){
    link.classList.add('active')
    content.classList.add('active')
    starte.classList.add('active')
}


