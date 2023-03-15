let trafficLightEl = document.getElementsByClassName('light');

trafficLightEl[0].addEventListener('click',()=> {foo('red');},false);
trafficLightEl[1].addEventListener('click',()=> {foo('yellow');},false);
trafficLightEl[2].addEventListener('click',()=> {foo('green');},false);

function foo(color){
    for(i=0; i<trafficLightEl.length; i++){ trafficLightEl[i].style.background = 'black'; }
    color == 'red' ? trafficLightEl[0].style.background = 'red' : '';
    color == 'yellow' ? trafficLightEl[1].style.background = 'yellow' : '';
    color == 'green' ? trafficLightEl[2].style.background = 'green' : '';
}
