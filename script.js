let digitalElement = document.querySelector('.digital');
let dataHoje = document.querySelector('.dia')
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let sDeg = ((360 / 60) * second) - 90
    let mDeg = ((360 / 60) * minute) - 90
    let hDeg = ((360 / 12) * hour) - 90

    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`

}

function fixZero(time) {
    return time < 10 ? `0${time}` : time
}



setInterval(updateClock, 1000)
updateClock()


// Data Atual
function datadeHoje() {
    let dia = new Date()
    let date = dia.getDate()
    let mes = dia.getMonth()
    let ano = dia.getFullYear()

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    mes = meses[mes]
    
    dataHoje.innerHTML = `Hoje é dia ${date} de ${mes} de ${ano}`
}
datadeHoje()
