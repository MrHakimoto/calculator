var insert = document.querySelector("#insert")
var expressao1 = document.querySelector(".expressao1")
var expressao = document.querySelector(".expressao")
var fatore, Tinfo, sinal
var abs = false;
var enterT = 0;
var vf = 0;
var opt, farmax, farmax1, leonis, cConom, bd, inicio, saldo, RelogioON; bd = [];
RelogioON = leonis = false
saldo = []
for (var i = 0; i <= 2; i++)  saldo[i] = 0;

inicio = 0;

function dcp(n) {
    opt = n;
    farmax = document.getElementById('fatore')
    farmax1 = document.querySelector("#fatore1")
    switch (opt) {
        case 3:
            farmax.style.visibility = "visible"
            farmax1.style.visibility = "visible";
            farmax.innerHTML = "Multiplique por 1 fator"
            break;
        case 4:
            farmax.style.visibility = "visible"
            farmax1.style.visibility = "visible";
            farmax.innerHTML = "Divida por 1 fator"
            break;

    }
    if (opt == 1 || opt == 2) {
        farmax.style.visibility = 'hidden'
        farmax1.style.visibility = 'hidden';
        farmax.innerHTML = "";
    }
}
var btnR = document.querySelector("#verificar")
var result = document.querySelector(".result")
var calc = document.querySelector(".expressao")
var TypeNumbers
function hours(n) {

    if (n === 1) {
        TypeNumbers = 1
        leonis = false
    } else if (n === 2) {
        TypeNumbers = 2
        leonis = false
    } else if (n === 3) {
        TypeNumbers = 0
        leonis = true
    }
}
function enter(e) {
    let unicode = e.which;
    console.log(unicode)

    if (!abs) return

    if (unicode === 13) {

        if (vf == 1) {

            vf = 2
        }
        if (vf == 0) {

            verificar();
            vf = 1
        }

        if (/*enterT == 1 &&*/ vf == 2) {
            gerar();
            vf = 0
        }

    }

}


//Função principal
function gerar() {
    if (RelogioON) inicio++
    expressao.style.fontWeight = "bolder"
    insert.value = "";
    result.innerHTML = "";
    if (TypeNumbers == undefined) return alert("Selecione quantas casas você deseja fazer a operação!")


    if (opt == null || opt == undefined) return alert("Selecione o operador desejado para a operação!")
    console.log(opt + "valore")

    console.log(opt)
    console.log(TypeNumbers)
    switch (opt) {
        case 1:
            console.log("CHUpador")
            console.log(TypeNumbers)
            bd[0] = creates(TypeNumbers);
            bd[1] = creates(TypeNumbers);
            bd[3] = "+";
            operacao = bd[0] + bd[1];
            bd[4] = operacao
            break;
        case 2:
            bd[0] = creates(TypeNumbers);
            bd[1] = creates(TypeNumbers);
            while (bd[0] < bd[1]) {
                bd[0] = creates(TypeNumbers);
                bd[1] = creates(TypeNumbers);
            }
            bd[3] = "-";
            operacao = bd[0] - bd[1];
            bd[4] = operacao
            break;
        case 3:
            if (!leonis == false) {
                bd[0] = creates(TypeNumbers = 1);
                bd[1] = creates(TypeNumbers = 3);
            } else {
                bd[0] = creates(TypeNumbers);
                bd[1] = creates(TypeNumbers);
            }
            bd[3] = "*";
            operacao = bd[0] * bd[1];
            bd[4] = operacao
            break;
        case 4:
            if (!leonis == false) {
                bd[0] = creates(TypeNumbers = 1);
                bd[1] = creates(TypeNumbers = 3);
            } else {
                bd[0] = creates(TypeNumbers);
                bd[1] = creates(TypeNumbers);
            }
            bd[3] = "/";
            operacao = bd[0] / bd[1];
            bd[4] = operacao
            break;
    }
    console.log("Fala tu2 " + inicio)
    abs = true
    if (inicio == 1) {
        relogium()
        console.log("Fala tu2 " + inicio)
    }


    expressao1.innerHTML = "Resolva:";
    expressao1.style.visibility = "visible";
    calc.innerHTML = `${bd[0]} ${bd[3]} ${bd[1]}`;
    calc.style.color = "red"
    calc.style.fontSize = "50px"
    console.log(calc.style.fontSize + " Tamnho de fonte")

}

function exlux() {
    if (abs) {
        btnR.style.visibility = "visible";
    }
}


/*
Função que gerará os números para operação
Ela exige a quantidade de casas, se é apenas 
com desenas ou com centenas.
*/

function creates(QtdN) {
    var num
    switch (QtdN) {
        case 1:
            num = Math.floor((Math.random() * 100) + 1);
            break;

        case 2:
            num = Math.floor((Math.random() * 999) + 100);
            break;
        case 3:
            num = Math.floor((Math.random() * 9) + 1);
    }
    return num
}
/*
saldo[0] questôes feitas
saldo[1] questôes acertadas
saldo[2] questôes erradas
*/
function verificar(b) {
    if (insert.value == bd[4]) {
        console.log("Você Acertou!")
        result.innerHTML = "<span style='color: green; text-decoration: underline; font-weight: bold;'> Você acertou! </span> <br> resultado é: " + operacao;
        if (RelogioON) {
            saldo[0]++
            saldo[1]++
        }

    } else {
        console.log("Você Errou")
        result.innerHTML = "<span style='color: red; text-decoration: underline; font-weight: bold; '> Você Errou! </span> <br> resultado é: " + operacao;
        if (RelogioON) {
            saldo[0]++
            saldo[2]++
        }
    }
}

var minutos;
var segundos = 0;
var num
var piscando = document.getElementById('conometro');
function conometro(a) {
    num = a
    RelogioON = true
}
function relogium() {
    console.log(typeof num)
    if (num == 0) return
    if (inicio == 1) {
        switch (num) {
            case "1":
                minutos = 3
                //numeros de minutos para a contagem regressiva...
                qntQuest = 10
                break;
            case "2":
                minutos = 5
                qntQuest = 15
                break;
            case "3":
                minutos = 5
                qntQuest = 20
                break;
            case "4":
                minutos = 3
                qntQuest = 8
                break;
            case "5":
                minutos = 1
                qntQuest = 10
                break;
        }
        tempo = true

        var invervalo = setInterval(function () { segundo() }, 1000)


        if (minutos < 10) {
            document.getElementById('minuto').innerHTML = "0" + minutos + ":"
        } else {
            document.getElementById('minuto').innerHTML = minutos + ":"
        }


        if (segundos < 10) {
            document.getElementById('segundo').innerHTML = "0" + segundos
        } else {
            document.getElementById('segundo').innerHTML = segundos
        }

        function segundo() {
            //incrementa os segundos


            if (segundos == 0) {
                //incrementa os minutos
                minutos--;
                //Zerar os segundos
                segundos = 60;
                //escreve os minutos
                if (minutos < 10) {
                    document.getElementById('minuto').innerHTML = "0" + minutos + ":"
                } else {
                    document.getElementById('minuto').innerHTML = minutos + ":"
                }


            }
            segundos--;
            console.log("Número de feitas      " + saldo[0])
            if (segundos == 0 && minutos == 00) {
                tempo = false;
                clearInterval(invervalo)
                ConometroTimeOut()
            }
            if (saldo[0] == qntQuest) {
                clearInterval(invervalo)
                ConometroTimeOut()
            }

            if (minutos == 0 && segundos <= 15) {
                piscando.style.color = "red";            
            }
            //escreve os segundos
            if (minutos < 10) {
                document.getElementById('segundo').innerHTML = "0" + minutos + ":"
            } else {
                document.getElementById('segundo').innerHTML = minutos + ":"
            }


            if (segundos < 10) {
                document.getElementById('segundo').innerHTML = "0" + segundos
            } else {
                document.getElementById('segundo').innerHTML = segundos
            }

        }
        if (!tempo) {
            console.log("Cabou!")
        }

    }
}
function ConometroTimeOut() {
    if (!tempo) {

        Tinfo = document.querySelector("#time-info")
        Tinfo.innerHTML = "O tempo acabou, você <b><u>Perdeu!</u></p>";
        Tinfo.style.visibility = "visible";
        Tinfo.style.marginTop = "10px";
        //contabilizar()
        
        var piscando = document.getElementById('conometro');
        var interval = window.setInterval(function () {
            if (piscando.style.visibility == 'hidden') {
                piscando.style.visibility = 'visible';
            } else {
                piscando.style.visibility = 'hidden';
            }
        }, 700);
    }
    if (saldo[0] == qntQuest) {
        Tinfo = document.querySelector("#time-info")
        Tinfo.innerHTML = "Você fez as questões propostas, você <b><u>Conseguiu!</u></p>";
        Tinfo.style.visibility = "visible";
        Tinfo.style.marginTop = "10px";
        var piscando = document.getElementById('conometro');
        //contabilizar()
    }
}
function contabilizar() { }