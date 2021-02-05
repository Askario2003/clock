const   watchBtn = document.querySelector('.stopwatch__btn'),            /*  подключаемся к html элементам  */
        secondWatch = document.querySelector('.stopwatch__seconds'),
        minutesWatch = document.querySelector('.stopwatch__minutes'),
        hoursWatch = document.querySelector('.stopwatch__hours'),
        seconfInfo = document.querySelector('.tabsLink__span');
        
watchBtn.addEventListener('click', function () {                   /*  повесили событие клик   */
    if (this.innerHTML == 'start') {                           /*  если происходит клик срабатывает  callback и начинает срабатывать условие   */
        this.innerHTML = 'stop';                               /*  условие - если мы нажали на start то он поменяется на stop*/
        seconfInfo.classList.add('active');                   /*  потом на secondInfo добавляется класс active */
        let i = 0;                                           /* создаем перемнную i */
        setTimeout(() => stopWatch(this, i), 1000)          /*  с помощью функции setTimeout буит заного вызывать stopWatch каждую сек,но ввместо el будет использоваться this этой функции  */

    } else if (this.innerHTML == 'stop') {                /*  доп условие : когда пользователь нажмет на кнопку и на ней будет написано stop то */
        seconfInfo.classList.remove('active');              /*  убрать класс active и */
        seconfInfo.classList.add('active_clear');           /*  добавить класс active_clear*/
        this.innerHTML = 'clear';                        /*  кнопка поменяет значение на clear */
    } else {                                          /*  в остальных случаях  */
        seconfInfo.classList.remove('active_clear');    /* убрать класс active_clear  */
        secondWatch.innerHTML = 0;                     /* и значения минутного часового и секундного таймера должны стать равны 0 */
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML = 0;
        this.innerHTML = 'start';          /*  и кнопка сново принимает значение start */
    }
})
function stopWatch(el, i) {                    /* создаем функцию stopWatch которая принимает два аргумента */
    if (el.innerHTML == 'stop') {              /* ставим условие если написано stop то */
        if (i == 60) {                        /* ставим еще одно условие */
            i = 0;                           /* когда i станет равен 60 то значение должно поменяться на 0 */
            secondWatch.innerHTML = i        /*  значение в html е должно меняться в соответсятвии с переменной i*/
            if (minutesWatch.innerHTML == 59) {    /* ставим условие если минутный таймер станет равен 59  */
                minutesWatch.innerHTML = 0;           /* то он поменяет значение на 0 */
                hoursWatch.innerHTML++;              /* и часовой таймер ++ */
            } else {                           /* если же минутный таймер не равна 59 то он будет ++ */
                minutesWatch.innerHTML++
            }
        } else {                            /* если секндный таймер не рвен 60 то он будет ++ */
            i++ 
            secondWatch.innerHTML = i; 
        }
        setTimeout(() => stopWatch(el, i), 10); /* эта функция будет вызывать саму себя каждые 10 мс */
    } 
} 