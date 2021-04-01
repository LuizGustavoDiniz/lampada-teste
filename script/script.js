const turnOn = document.querySelector('#turnOn')

const turnOff = document.querySelector('#turnOff')

const lamp = document.querySelector('#lamp')

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1   // se voce der dois cliques na lampada ela se quebra e nenhuma oura funcionalidade irá funcionar até a pagina ser recarregada
}

function lampOn (){
    if(!isLampBroken()){
     lamp.src = '/images/ligada.jpg'
    }
}
function lampOff (){
    if(!isLampBroken()){
    lamp.src = '/images/desligada.jpg'
    }
}
function broken(){
    if(!isLampBroken()){
    lamp.src = '/images/quebrada.jpg'
    }
}

turnOn.addEventListener('click', lampOn )

turnOff.addEventListener('click', lampOff)

lamp.addEventListener('mouseover', lampOn)

lamp.addEventListener('mouseout', lampOff)

lamp.addEventListener('dblclick', broken )
