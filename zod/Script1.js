var a = prompt('Write first date:', "year-month-day");
var date = new Date(a);
var ariesS = new Date(date.getFullYear(), 2, 21),
ariesE = new Date(date.getFullYear(), 3, 20),

taurusS = new Date(date.getFullYear(), 3, 21),
taurusE = new Date(date.getFullYear(), 4, 20),

geminiS = new Date(date.getFullYear(), 4, 21),
geminiE = new Date(date.getFullYear(), 5, 21),

cancerS = new Date(date.getFullYear(), 5, 22),
cancerE = new Date(date.getFullYear(), 6, 22),

leoS = new Date(date.getFullYear(), 6, 23),
leoE = new Date(date.getFullYear(), 7, 23), 

virgoS = new Date(date.getFullYear(), 7, 24),
virgoE = new Date(date.getFullYear(), 8, 23), 

libraS = new Date(date.getFullYear(), 8, 24),
libraE = new Date(date.getFullYear(), 9, 23),

scorpioS = new Date(date.getFullYear(), 9, 24),
scorpioE = new Date(date.getFullYear(), 10, 22),

sagittariusS = new Date(date.getFullYear(), 10, 23),
sagittariusE = new Date(date.getFullYear(), 11, 21),

capricornS = new Date(date.getFullYear(), 11, 22),
capricornE = new Date(date.getFullYear(), 11, 31),
capricornS1 = new Date(date.getFullYear(), 0, 1),
capricornE1 = new Date(date.getFullYear(), 0, 20),

aquariusS = new Date(date.getFullYear(), 0, 21),
aquariusE = new Date(date.getFullYear(), 1, 20),

piscesS = new Date(date.getFullYear(), 1, 21),
piscesE = new Date(date.getFullYear(), 2, 20);

var images = document.querySelectorAll('#img'), i = 0;
while(i < images.length){
    images[i].className = 'img';
    i++;
}
i = 0;
while(images[i].className !== 'view'){
    if(date >= ariesS && date <= ariesE){
        images[i].className = 'view';
    } else {
        i++;
    }

    if(date >= taurusS && date <= taurusE){
        images[i].className = 'view';
    } else {
        i++;
    }

    if(date >= geminiS && date <= geminiE){
        images[i].className = 'view';
    } else {
        i++;
    }

    if(date >= cancerS && date <= cancerE){
        images[i].className = 'view';
    } else {
        i++;
    }

    if(date >= leoS && date <= leoE){
        images[i].className = 'view';
    } else {
        i++;
    }

    if(date >= virgoS && date <= virgoE){
        images[i].className = 'view';
    } else {
        i++;
    }
    if(date >= libraS && date <= libraE){
        images[i].className = 'view';
    } else {
        i++;
    }

    if(date >= scorpioS && date <= scorpioE){
        images[i].className = 'view';
    } else {
        i++;
    }

    if(date >= sagittariusS && date <= sagittariusE){
        images[i].className = 'view';
    } else {
        i++;
    }
    if((date >= capricornS && date <= capricornE) || (date >= capricornS1 && date <= capricornE1)){
        images[i].className = 'view';
    } else {
        i++;
    }

    if(date >= aquariusS && date <= aquariusE){
        images[i].className = 'view';
    } else {
        i++;
    }

    if(date >= piscesS && date <= piscesE){
        images[i].className = 'view';
    }
}