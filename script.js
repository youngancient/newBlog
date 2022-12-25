// for mobile navbar

isClicked = false;

const icon = document.querySelector('.burger .menu');
const popup = document.querySelector('main .popup');
const slidein = document.querySelector('.popup .slidein');

function onClick(){
    popup.classList.toggle('blur')
    popup.classList.toggle('hide');
    slidein.classList.toggle('left');
    if(!isClicked){
        isClicked = true;
    }else{
        isClicked = false;
    }
}

function noShow(){
    if(isClicked){
        popup.classList.add('hide');
        popup.classList.remove('blur');
        slidein.classList.add('left');
        isClicked = false;
    }
}