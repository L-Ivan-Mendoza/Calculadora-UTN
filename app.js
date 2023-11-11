const text_num1 = document.getElementById("num1");
const text_num2 = document.getElementById("num2");
const boton1 = document.getElementById("suma");
const boton2 = document.getElementById("resta");
const boton3 = document.getElementById("mult");
const boton4 = document.getElementById("divi");
const p_result = document.getElementById("resultado");

boton1.addEventListener('click', sumar)
boton2.addEventListener('click', restar)
boton3.addEventListener('click', multiplicar)
boton4.addEventListener('click', dividir);

function sumar (){
    const pNum = parseFloat(text_num1.value)
    const sNum = parseFloat(text_num2.value)

    const res = pNum + sNum
    p_result.innerHTML = res
}

function restar (){
    const pNum = parseFloat(text_num1.value)
    const sNum = parseFloat(text_num2.value)

    const res = pNum - sNum
    p_result.innerHTML = res
}

function multiplicar (){
    const pNum = parseFloat(text_num1.value)
    const sNum = parseFloat(text_num2.value)

    const res = pNum * sNum
    p_result.innerHTML = res
}

function dividir (){
    const pNum = parseFloat(text_num1.value)
    const sNum = parseFloat(text_num2.value)

    const res = pNum / sNum
    p_result.innerHTML = res
}