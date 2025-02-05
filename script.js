const inputHari1 = document.getElementById('hari1').innerText
const inputHari2 = document.getElementById('hari2').innerText
const gajiPerHari = 750000;

function checkGaji(x) {
    totalGaji =  x * gajiPerHari
    console.log(totalGaji)
}

function submit () {
    checkGaji(inputHari1)
    document.getElementById('result1').innerHTML = totalGaji
    checkGaji(inputHari2)
    document.getElementById('result2').innerHTML = totalGaji
}

