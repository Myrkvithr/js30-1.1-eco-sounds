'use strict'

console.log(`Оценка 60 баллов.

Вёрстка +10:
- есть не меньше пяти интерактивных элементов,
с которыми пользователи могут взаимодействовать.
Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации +5

- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5

При кликах по интерактивным элементам меняется изображение +10

При кликах по интерактивным элементам меняется звук +10

Активный в данный момент интерактивный элемент выделяется стилем +10

Кнопка Play/Pause +20

есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10

внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10

НЕ ВЫПОЛНЕНО:

Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +0

`);




//----------Preload imgs

function preloadBackgroundImages(urls) {
    urls.forEach((el, index) => {
        const img = new Image();
        img.src = urls[index];

    });
}



preloadBackgroundImages(['./assets/img/forest.jpg',
    './assets/img/solovey.jpg',
    './assets/img/drozd.jpg',
    './assets/img/zarynka.jpg',
    './assets/img/javoronok.jpg',
    './assets/img/slavka.jpg',
]);



//------------
//-----------
const audio = new Audio();
let isPlay = false;


function playAudio(soundBird) {
    if (!isPlay) {
        audio.src = `./assets/audio/${soundBird}.mp3`;
        audio.currentTime = 0;
        audio.play();
    } else {
        audio.pause();
    }
}

//-----BTN

const button = document.querySelector('.content__play-btn');

function toggleBtn() {
    button.classList.toggle('pause');
    const currentActiveLink = document.querySelector('.active').dataset.bird;
    console.log(currentActiveLink);

    if (button.classList.contains('pause')) {
        isPlay = false;
        playAudio(currentActiveLink);
        console.log(isPlay, ' ok111');
    } else {
        isPlay = true;
        playAudio();
        console.log(isPlay, ' ok2');
    }

}

button.addEventListener('click', toggleBtn);



//-----Active link

const linksArr = document.querySelectorAll('.header__nav-link');
const headerCont = document.querySelector('.header__container');

function activeLink(event) {

    const birdType = event.target.dataset.bird;


    if (event.target.classList.contains('header__nav-link')) {

        linksArr.forEach((el) => {
            if (el.classList.contains('active')) {
                el.classList.remove('active');
            }

        });

        event.target.classList.add('active');
        button.classList.add('pause');
        isPlay = false;
        console.log(birdType);
        playAudio(birdType);
        document.querySelector('.content').style.backgroundImage = `url(./assets/img/${birdType}.jpg)`;



    }
}

headerCont.addEventListener('click', activeLink);
