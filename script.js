const pass1 = '2Fj(jjbFsuj';
const pass2 = 'eoZiugBf&g9';


let password = document.getElementById('pass');
const btn = document.querySelector('#btn');


btn.addEventListener('click', ()=>{
    if(password.value == pass1 || password.value == pass2){
        password = true;
        alert(password)
    }else {
        password = false;
        alert(password)
    }
})

// ------------------------------------------------

function contraseñaValida(pass) {
    if (pass == pass1 || pass == pass2) {
        pass = true;
        console.log(pass);
    } else {
        pass = false;
        console.log(pass);
    }
}contraseñaValida(pass1);

// ===========================================================================

let edad = document.getElementById('edad');
let ingreso = document.getElementById('ing');
let totalIng = document.querySelector('#ing-total');

const calBtn = document.querySelector('#cal-btn');
const edadcConst = 18;
const ingConst = 1000;

let totalIngresos;

calBtn.addEventListener('click', ()=>{
    if (parseInt(edad.value) >= edadcConst && parseInt(ingreso.value) >= ingConst){
            let edadInt = parseInt(edad.value);
            let ingInt = parseInt(ingreso.value);
        
            totalIngresos = ingInt * 0.4;
        
            let ingresosJSON = JSON.stringify(totalIngresos);
            totalIng.textContent = ingresosJSON;

    } else {
        alert('No cumple con los requerimientos')
            totalIngresos = 0;
            let ingresoJSON = JSON.stringify(totalIngresos);
            totalIng.textContent = ingresoJSON;
    }
})
// ------------------------------------------------
function calcualrIngresos(edad, ingreso) {
    if(edad >= edadcConst && ingreso >= ingConst){
        totalIngresos = ingreso * 0.4;
        console.log('Saldo: ' + totalIngresos);
    }else{
        totalIngresos = 0;
        console.log('Saldo: ' + totalIngresos)
    }
}calcualrIngresos(17, 5000);

// ===========================================================================
const BP = 18.5;
const NM = 24.9;
const SP1 = 25;
const SP2 = 29.9;
const OB = 30;


let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let pantalla = document.querySelector('#res')

const btnBMI = document.querySelector('#cal-bmi');

btnBMI.addEventListener('click', ()=>{
    let pesoInt = parseInt(peso.value);
    let alturaInt = parseFloat(altura.value);

    let total = pesoInt/(alturaInt*alturaInt);
    console.log(total)

    if (total < BP) {
        pantalla.textContent = 'Bajo de Peso';
    } else if (total >= BP && total <= NM) {
        pantalla.textContent = 'Tienes un peso normal';
    }else if (total >= SP1 && total <= SP2) {
        pantalla.textContent = 'Sobrepeso';
    }else if (total >= OB) {
        pantalla.textContent = 'Padece de obecidad'
    }
})
// -------------------------------------------------
function BMI(peso, altura) {
    let total = peso/(altura*altura);

    if (total < BP) {
        alert('Bajo de Peso');
    }else if (total >= BP && total <=NM) {
        alert('Peso Normal');
    }else if(total >= SP1 && total <=SP2) {
        alert('Sobrepeso');
    }else if (total >= OB) {
        alert('Obesidad');
    }
}BMI();

// ==========================================================================

const btnArray = document.querySelector('.btn-array');
const screen = document.querySelector('.container');

btnArray.addEventListener('click', ()=>{
    let element1 = document.getElementById('1er').value;
    let element2 = document.getElementById('2do').value;
    let element3 = document.getElementById('3ero').value;
    let element4 = document.getElementById('4to').value;

    let array = [element1, element2, element3, element4];   
    console.log(array);

    screen.textContent = array;
})
// -------------------------------------------------
function imprimirArreglo(element1, element2, element3, element4) {
    var array = [element1, element2, element3, element4];

    for(let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}imprimirArreglo(1, 'Hola', 3, 'Leo');

// ===========================================================================

let cantidad = document.getElementById('cant');
const btnCant = document.querySelector('#btn-cant');
let screenCant = document.querySelector('#cant-convert');

btnCant.addEventListener('click', ()=>{
    let cantint  = parseInt(cantidad.value);

    if (cantint <= 999) {
        screenCant.textContent = cantint;
    }else if (cantint >= 1000 && cantint <= 999999) {
        screenCant.textContent = (cantint/1000) + 'K';
    }else if (cantint >= 1000000) {
        screenCant.textContent = (cantint/1000000) + 'M'
    }
})
// ---------------------------------------------
function likes(cant) {
    if (cant <= 999) {
        console.log(cant);
    }else if (cant >= 1000 && cant <= 999999) {
        console.log((cant/1000) + 'K');
    }else if (cant >= 1000000) {
        console.log((cant/1000000) + 'M');
    }
}likes(1000)

// ===========================================================================

let cantFB = document.getElementById('cant-fb');
const btnFB = document.querySelector('#btn-convert');
let screenFB = document.querySelector('#fb');

btnFB.addEventListener('click', ()=>{
    let cantFBconvert = parseInt(cantFB.value);

    if (cantFBconvert%3 === 0 && cantFBconvert%5 === 0) {
        screenFB.textContent = 'FizzBuzz';
    } else if(cantFBconvert%3 === 0) {
        screenFB.textContent = 'Fizz';
        console.log(cantFBconvert + ' es multiplo de 3');
    } else if (cantFBconvert%5 === 0) {
        screenFB.textContent = 'Buzz';
        console.log(cantFBconvert + ' es multiplo de  y de 5');
    }
})
// ---------------------------------------------
function fizzBuzz(number) {
    if (number%3 === 0 && number%5 === 0) {
        console.log('FizzBuzz');
    } else if(number%3 === 0){
        console.log('Fizz');
    } else if(number%5 === 0){
        console.log('Buzz');
    }
}fizzBuzz(30)

// ===========================================================================

var acu = 0;
var acu2 = 0;
let cant1 = document.getElementById('cant1');
let cant2 = document.getElementById('cant2');

const btnRange = document.querySelector('#btn-range');
const screenRange = document.querySelector('#screen-range');
const cantRange = document.querySelector('#cant-range');

btnRange.addEventListener('click', ()=>{
    let cant1Convert = parseInt(cant1.value);
    let cant2Convert = parseInt(cant2.value);

    if (cant1Convert < cant2Convert) {
        for (let index = cant1Convert+1; index < cant2Convert-1; index++) {
            acu += index;
            acu2 += 1;
        }
        screenRange.textContent = acu;
        cantRange.textContent = acu2;
    } else {
        alert('El primer numero debe ser menor que el segundo')
    }
})
// ----------------------------------------------
function contarRango(number1, number2) {
    if (number1 < number2) {
        for (let index = number1+1; index < number2-1; index++){
            acu += index;
            acu2 += 1;
        }
        console.log(acu, acu2);
    } else {
        console.log('El primer numero debe ser menor que el segundo');
    }
}contarRango(10, 20)

// ===========================================================================

var cont = 0;
var cont2 = 0;

let cantRange1 = document.getElementById('cant-r1');
let cantRange2 = document.getElementById('cant-r2');

const btnRange2 = document.querySelector('#btn-range2');
const screenSuma = document.querySelector('#suma');
const screenCantR = document.querySelector('#cant-rg');


btnRange2.addEventListener('click', ()=>{
    let convert1 = parseInt(cantRange1.value);
    let convert2 = parseInt(cantRange2.value);

    if (convert1 < convert2) {
        for (let index = convert1; index <= convert2; index++) {
            cont += index;
            cont2 += 1;         
        }
        screenSuma.textContent = cont;
        screenCantR.textContent = cont2;
    } else {
        alert('El primer numero debe ser menor que el segundo');
    }
})
// ---------------------------------------------
function sumarRango(number1, number2) {
    if (number1 < number2) {
        for (let index = number1; index <= number2; index++) {
            cont += index;
            cont2 += 1;
        }
        console.log(cont, cont2);
    } else {
        console.log('El primer numero debe ser menor que el segundo')
    }
}sumarRango(12, 14)

// ===========================================================================

let word = document.getElementById('word');
let letra = document.getElementById('letra');
let contWord = 0;

const btnWord = document.querySelector('#btn-word');
const asesScreen = document.querySelector('#ases')

btnWord.addEventListener('click', ()=>{
    for (let index = 0; index < word.value.length; index++) {
        if (word.value[index] === letra.value) {
            contWord ++;
        }
    }
    asesScreen.textContent = contWord;
})
// ---------------------------------------------
function numeroDeAses(word) {
    for (let index = 0; index < word.length; index++) {
        if (word[index] === 'a') {
            contWord ++;
            }
        }
        console.log('Veces que se repite la letra "a" en la palabra '+'"'+word+'"'+': ' + contWord);

}numeroDeAses('abracadabra')

// ===========================================================================

let wordCaracter = document.getElementById('word-caracter');
let letraCaracter = document.getElementById('letra-caracter');
let contCaracter = 0; 

const btnCaracter = document.querySelector('#btn-caracter');
const screenCarcater = document.querySelector('#caracter');

btnCaracter.addEventListener('click', ()=>{
    for (let index = 0; index < wordCaracter.value.length; index++) {
        if (wordCaracter.value[index] === letraCaracter.value) {
            contCaracter++;
        }
    }
    screenCarcater.textContent = contCaracter;
})
// ---------------------------------------------
function numeroDeCaracter(word, letra) {
    if (word.length > 0 && letra.length === 1) {
        for (let index = 0; index < word.length; index++) {
            if (word[index] === letra) {
                contCaracter++;
            }
        }
        console.log('Veces que se repite el caracter '+letra+' en la palabra '+word+': '+contCaracter);
    } else{ 
        console.log('Ingrese ambos valores');
    }
}numeroDeCaracter('Mundo', 'u')

// ============================================================================

const screenArray = document.querySelector('#suma-array');
const btnSuma = document.querySelector('#btn-numbers');

btnSuma.addEventListener('click', ()=>{
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    let num3 = parseInt(document.getElementById('number3').value);
    let num4 = parseInt(document.getElementById('number4').value);
    let num5 = parseInt(document.getElementById('number5').value);  

    let contArray = 0;
    let arrayNumbers = [num1, num2, num3, num4, num5];
    for (let index = 0; index < arrayNumbers.length; index++) {
        contArray += arrayNumbers[index];
    }
    screenArray.textContent = contArray;
})
// ---------------------------------------------
function sumarArray(array = []) {
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        suma += array[index];
    }
    console.log(suma);
}sumarArray([1,2,3,4])

// ============================================================================

const btnMult = document.querySelector('#btn-mult-array');
const screenMult = document.querySelector('#multi-array');

btnMult.addEventListener('click', ()=>{
    let numb1 = parseInt(document.getElementById('num1').value);
    let numb2 = parseInt(document.getElementById('num2').value);
    let numb3 = parseInt(document.getElementById('num3').value);
    let numb4 = parseInt(document.getElementById('num4').value);
    let numb5 = parseInt(document.getElementById('num5').value);

    var contMulti = 1;

    let arraymulti = [numb1, numb2, numb3, numb4, numb5]
    // console.log(arraymulti);

    for (let index = 0; index < arraymulti.length; index++) {
        contMulti *= arraymulti[index];
    }
    screenMult.textContent = contMulti;
})
// ---------------------------------------------
function multiplicarArray(array = []) {
    let suma = 1;
    for (let index = 0; index < array.length; index++) {
        suma *= array[index];
    }
    console.log(suma);
}multiplicarArray([1,2,3,4,5])
// ============================================================================

const btnRemove = document.querySelector('#btn-ceros');
const screenRemove = document.querySelector('#remove-cero');

btnRemove.addEventListener('click', ()=>{

    const remove = 0;

    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let numero3 = parseInt(document.getElementById('numero3').value);
    let numero4 = parseInt(document.getElementById('numero4').value);
    let numero5 = parseInt(document.getElementById('numero5').value);

    let arrayDigitos = [numero1, numero2, numero3, numero4, numero5]

    for (let index = 0; index < arrayDigitos.length; index++) {
        if (arrayDigitos[index] === remove) {
            var arregloFiltrado = arrayDigitos.filter(numero => numero !== 0);
        }
    }
    screenRemove.textContent = arregloFiltrado;
})
// ---------------------------------------------
function filtrarCero(array = []) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === 0) {
            var arregloFiltrado = array.filter(num => num !==0);
        }
    }
    console.log(arregloFiltrado);
}filtrarCero([1,0,2,0,3,0,4,0,5])

// ============================================================================

const btnSumaRango = document.querySelector('#btn-suma');
const screenSumaRangp = document.querySelector('#suma-rango');

btnSumaRango.addEventListener('click', ()=>{
    let index1 = parseInt(document.getElementById('index1').value);
    let index2 = parseInt(document.getElementById('index2').value);

    let n1 = parseInt(document.getElementById('n#1').value);
    let n2 = parseInt(document.getElementById('n#2').value);
    let n3 = parseInt(document.getElementById('n#3').value);
    let n4 = parseInt(document.getElementById('n#4').value);
    let n5 = parseInt(document.getElementById('n#5').value);

    let cont = 0;
    let array = [n1, n2, n3, n4, n5];

    if (index1 <= array.length && index2 <= array.length) {
        if (index1 <= index2 && index2 > index1) {
            for (let index = index1; index <= index2; index++) {
                cont += array[index];
            }
            screenSumaRangp.textContent = cont;
        }
    } else {
        alert('Los indices no se encuentran en el array');
    }
})
// ---------------------------------------------
function numerosEnRango(n1, n2, array = []) {
    let cont = 0;

    if (n1 <= array.length && n2 <= array.length) {
        if(n1 <= n2 && n2 > n1){
            for (let index = n1; index <= n2; index++) {
                cont += array[index];
            }
            console.log(cont);
        }else if (n1 === cont && n2 === cont) {
            console.log(cont);
        }
    }else { 
        console.log('Los indices no coinciden o no se encuentran en el array');
    }
}numerosEnRango(3,6,[1,2,3,4,5,6,7,8,9,10])

// =============================================================================
let arrayARN = ['C', 'G', 'A', 'U'];

const btnConvert = document.querySelector('#convert');
const screenArn = document.querySelector('#arn');
const screenSob = document.querySelector('#sob');

btnConvert.addEventListener('click', ()=>{
    let cadenaAdn = document.getElementById('adn');
    let text = cadenaAdn.value;

    let array  = text.split("");
    var arrayFinal = [];
    var arraySobrante = [];

    for (let index = 0; index < array.length; index++) {
            switch (array[index]) {
                case 'G': arrayFinal += [arrayARN[0]];
                        break;        
                case 'C': arrayFinal += [arrayARN[1]];
                        break;
                case 'T': arrayFinal += [arrayARN[2]];
                        break;
                case 'A': arrayFinal += [arrayARN[3]];
                        break;
                default : arraySobrante += [array[index]];
        }
    }
    screenSob.textContent = arraySobrante;
    screenArn.textContent = arrayFinal;
})
// ---------------------------------------------
function transcribir(string) {
    let text = string.split("");
    var arrayConvert = [];
    var arraySob = [];

    for (let index = 0; index < text.length; index++) {
        switch (text[index]) {
            case 'G': arrayConvert += [arrayARN[0]];
                break;
            case 'C': arrayConvert += [arrayARN[1]];
                break;
            case 'T': arrayConvert += [arrayARN[2]];
                break;
            case 'A': arrayConvert +=[arrayARN[3]];
                break;
            default: arraySob += [text[index]];
                break;
        }
    }
    console.log('ADN => ARN: '+ arrayConvert);
    console.log('Valores no correspondientes: ' + arraySob);
}transcribir('CGTAL')

// ==============================================================================

const btnCap = document.querySelector('#cap-btn');
const screenCap = document.querySelector('#pal-cap');

btnCap.addEventListener('click', ()=>{
    let palabraCap = document.getElementById('palabra').value;
    let primerLetra = palabraCap[0];

    if (primerLetra === primerLetra.toLowerCase()) {
        var palabraFinal = palabraCap[0].toUpperCase() + palabraCap.slice(1);
        screenCap.textContent = palabraFinal+'*';
    } else {
        screenCap.textContent = palabraCap;
    }
})
// ----------------------------------------------
function capitalizarPalabra(string) {
    if (string !== '') {
        let primerLetra = string[0];
        let palabraFinal;
    
        if (primerLetra === primerLetra.toLowerCase()) {
            palabraFinal = primerLetra.toUpperCase() + string.slice(1);
            console.log(palabraFinal);
        } else {
            console.log(string);
        }
    } else {
        console.log('"String Vacio"');
    }

}capitalizarPalabra('')

// ==============================================================================

const btnFrase = document.querySelector('#cf-btn');
const screenFrase = document.querySelector('#fra-cap');

btnFrase.addEventListener('click', ()=>{
    let fraseCap = document.getElementById('frase').value;
    
    let array = fraseCap.split(" ");

    let stringFinal;
    let arrayElement;
    var arrayFinal = [];

    for (let index = 0; index < array.length; index++) {
        arrayElement = array[index];

        let palabraFinal;
        let primerLetra;
        primerLetra = arrayElement[0];

        if (primerLetra === primerLetra.toLowerCase()) {
            palabraFinal = primerLetra.toUpperCase() + arrayElement.slice(1)
        } else {
            palabraFinal = arrayElement;
        }

        arrayFinal.push(palabraFinal);
    }

    stringFinal = arrayFinal.join(' ');

    screenFrase.textContent = stringFinal;
})
// ----------------------------------------------
function capitalizarFrase(string) {
    let arrayString = string.split(" ");
    
    let primeraletra;
    let palabraFinal;
    let arrayFinal = [];
    let stringFinal;
    
    for (let index = 0; index < arrayString.length; index++) {
        let arrayElement = arrayString[index];
        primeraletra = arrayElement[0];

        if (primeraletra === primeraletra.toLowerCase()) {
            palabraFinal = primeraletra.toUpperCase() + arrayElement.slice(1);
        } else {
            palabraFinal = arrayString[index];
        }
        arrayFinal.push(palabraFinal);
    }
    console.log(arrayFinal);
    stringFinal = arrayFinal.join(' ');
    console.log(stringFinal);
}capitalizarFrase('Hola mundo, como estas??')

// ==============================================================================

// function exampleFuntions() {
//     function suma(a, b) {
//         let suma = a+b;
//         return suma;
//     }let resultado = suma(2,4);
//     console.log(resultado);
    
//     function esPositivo(value) {
//         if (value > 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }let number = esPositivo(-10);
//     console.log(number);
// }

// ==============================================================================

const btnMax = document.querySelector('#btn-max');
const btnMin = document.querySelector('#btn-min');

const screenMax = document.querySelector('#max');

btnMax.addEventListener('click', ()=>{
    let num1 = parseInt(document.getElementById('n1').value);
    let num2 = parseInt(document.getElementById('n2').value);
    let num3 = parseInt(document.getElementById('n3').value);
    let num4 = parseInt(document.getElementById('n4').value);
    let num5 = parseInt(document.getElementById('n5').value);
    let array = [num1, num2 , num3, num4, num5];

    let numeroMayor = array[0];

    array.forEach(element => {
        if (element > numeroMayor) {
            numeroMayor = element;
        }
    });

    screenMax.textContent = numeroMayor;
})
// ----------------------------------------------
function max(array = []) {
    // let numeroMayor = Math.max(...array);
    let numeroMayor = array[0];

    array.forEach(element => {
        if(element > numeroMayor){
            numeroMayor = element;
        }
    })
    console.log(numeroMayor);
}max([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
// ----------------------------------------------
btnMin.addEventListener('click', ()=>{
    let num1 = parseInt(document.getElementById('n1').value);
    let num2 = parseInt(document.getElementById('n2').value);
    let num3 = parseInt(document.getElementById('n3').value);
    let num4 = parseInt(document.getElementById('n4').value);
    let num5 = parseInt(document.getElementById('n5').value);

    let array = [num1, num2, num3, num4, num5]
    let numeroMenor = array[0];

    array.forEach(element =>{
        if (element < numeroMenor) {
            numeroMenor = element;
        }
    })
    screenMax.textContent = numeroMenor;
})
// ----------------------------------------------
function min(array = []) {
    let numeroMenor = array[0];

    array.forEach(element =>{
        if (element < numeroMenor) {
            numeroMenor = element;
        }
    })
    console.log(numeroMenor);
}min([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])

// ===============================================================================

const btnPass = document.querySelector("#generar");
const screenGenerate = document.querySelector('#pass-generate');

btnPass.addEventListener('click', ()=>{
    let pass = document.getElementById('password').value;

    let passWtdoSpace = pass.replace(/\s+/g, '');
    let passFinal;
    let passGenerate = [];

    for (let index = 0; index < passWtdoSpace.length; index++) {
        let newElement;
        let element = passWtdoSpace[index];

        switch (element) {
            case  'a':
                element = '4';
                passGenerate.push(element);
                break;

            case  'e':
                element = '3';
                passGenerate.push(element);
                break;

            case  'i':
                element = '1';
                passGenerate.push(element);
                break;

            default: 
                if (element === element.toUpperCase()) {
                    newElement = element.toLowerCase();
                    passGenerate.push(newElement);
                } else {
                    passGenerate.push(element);
                }
                break;

        }
    }
    passFinal = passGenerate.join('');
    screenGenerate.textContent = '"'+passFinal+'"';
})
// ---------------------------------------------
function passWord(string) {
    let strinWtdoSpace = string.replace(/\s+/g, '');
    let arrayGenerate = [];
    let arrayFinal;

    for (let index = 0; index < strinWtdoSpace.length; index++) {
        let newElement;
        let element = strinWtdoSpace[index];

        switch (element) {
            case 'a':
                element = '4'
                arrayGenerate.push(element)
                break;

            case 'e':
                    element = '3'
                    arrayGenerate.push(element)
                    break;
        
            case 'i':
                element = '1'
                arrayGenerate.push(element)
                break;

            default:
                if (element === element.toUpperCase()) {
                    newElement = element.toLowerCase();
                    arrayGenerate.push(newElement);     
                } else {
                    arrayGenerate.push(element);
                }
                break;
        }
    }
    arrayFinal = arrayGenerate.join('');
    console.log(arrayFinal);

}passWord('esta es una prueba')

// ===============================================================================

const btnPares = document.querySelector('#btn-par');
const screenPar = document.querySelector('#par');
const screenImp = document.querySelector('#imp');

btnPares.addEventListener('click', ()=>{
    let n1 = parseInt(document.getElementById('nb1').value);
    let n2 = parseInt(document.getElementById('nb2').value);
    let n3 = parseInt(document.getElementById('nb3').value);
    let n4 = parseInt(document.getElementById('nb4').value);
    let n5 = parseInt(document.getElementById('nb5').value);

    let array = [n1, n2, n3, n4, n5]
    let arrayPar = [];
    let arrayImp = [];

    array.forEach(element =>{
        if (element%2 === 0) {
            arrayPar.push(element);       
        } else {
            arrayImp.push(element);
        }
    })

    screenPar.textContent = arrayPar;
    screenImp.textContent = arrayImp;
})
// --------------------------------------------
function parImp(array = []) {
    let arrayPar = [];
    let arrayImp = [];

    array.forEach(element =>{
        if (element%2 === 0) {
            arrayPar.push(element);
        } else {
            arrayImp.push(element);
        }
    })
    console.log('Numero Pares: '+arrayPar);
    console.log('Numero Impares: '+arrayImp);
}parImp([10,11,12,13,14,15,16,17,18,19,20])

// ===============================================================================

const btnPosition = document.querySelector('#btn-position');
const screenNum = document.querySelector('#num');
const screenPos = document.querySelector('#pos');

btnPosition.addEventListener('click', ()=>{
    let n1 = parseInt(document.getElementById('d1').value);
    let n2 = parseInt(document.getElementById('d2').value);
    let n3 = parseInt(document.getElementById('d3').value);
    let n4 = parseInt(document.getElementById('d4').value);
    let n5 = parseInt(document.getElementById('d5').value);

    let array = [n1, n2, n3, n4, n5]
    let arrayPar = [];
    let arrayPosition = [];

    for (let index = 0; index < array.length; index++) {
        let position;
        let element = array[index];
        if (element%2 === 0) {
            arrayPar.push(element);
            position = array.indexOf(element);
            arrayPosition.push(position);
        }
    }
    screenNum.textContent = arrayPar;
    screenPos.textContent = arrayPosition;
})
// --------------------------------------------
function position(array = []) {
    let arrayPos = [];
    let arrayNum = [];

    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        let position;

        if (element%2 === 0) {
            arrayNum.push(element);
            position = array.indexOf(element);
            arrayPos.push(position)    
        }
    }
    console.log('Numero enteros: '+arrayNum);
    console.log('Posicion en el array: '+arrayPos);
}position([1,2,3,4,5,6,7,8,9,10])

// ===============================================================================

let btnIng = document.querySelector('#ing-btn');
let screenDuplicate = document.querySelector('#Screen-Duplicate');

btnIng.addEventListener('click', ()=>{
    let nArray = document.getElementById('nu1').value;
    let nArrayFor = nArray.split("");

    console.log(nArrayFor);

    let arrayNu = [];

    nArrayFor.forEach(element=>{
        let numDuplicate = element*2;
        arrayNu.push(numDuplicate);
    })

    screenDuplicate.textContent = arrayNu;

})
// --------------------------------------------
function arrayDuplicar(arrayDuplicate = []) {
    let arrayFor = arrayDuplicate.split("");

    let arrayNu = [];

    for (let index = 0; index < arrayFor.length; index++) {
        let arrayD = arrayFor[index]*2;

        arrayNu.push(arrayD);   
        
    }

    console.log('Array Duplicado: ', arrayNu);
}arrayDuplicar('2468')