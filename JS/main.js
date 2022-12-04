
// ___________________________________________________________
// const cinco = document.querySelector("#percent5");

// cinco.addEventListener("click", function(e){
//     e.preventDefault();

//     var inputconta = document.querySelector("#input-conta");
//     const value = inputconta.value;
//     console.log(value);

//     const tGorjeta = document.getElementById('total-gorjeta');
//     tGorjeta = Number(inputconta.value *5)/100;
//     console.log(tGorjeta);
    
// });

// __________________________________________________________

const porcentagem1 = document.querySelector("#percent5");
const porcentagem2 = document.querySelector("#percent10");
const porcentagem3 = document.querySelector("#percent15");
const porcentagem4 = document.querySelector("#percent25");
const porcentagem5 = document.querySelector("#percent50");
const custom = document.querySelector("#custom");
const reset = document.querySelector(".reset");

const porcentagemCustom = document.querySelector(".tip-custom");
const valorconta = document.querySelector("#input-conta");
var pGorjeta = document.querySelector("#valor-gorjeta");
var tGorjeta = document.querySelector("#total-gorjeta");
var pessoas = document.querySelector("#pessoas");


    porcentagem1.addEventListener("click", function(){

        if(valorconta.value == "" || pessoas.value == ""){
            tGorjeta.innerHTML = "Insira um valor!";            
            pGorjeta.innerHTML = "Insira um valor!";

        }else{
            var calculo = Number(5) * Number(valorconta.value)/ 100;
            tGorjeta.innerHTML = "R$" + calculo.toFixed(2);
            // valorconta.innerHTML = "R$" + (2);
            console.log(calculo);
            console.log(valorconta.value);
        
             var porPessoa = (Number(calculo) / Number(pessoas.value));
            pGorjeta.innerHTML = "R$" + porPessoa.toFixed(2);
            console.log(pessoas.value);

        }        
})

porcentagem2.addEventListener("click", function(){

    if(valorconta.value == "" || pessoas.value == ""){
        tGorjeta.innerHTML = "Insira um valor!";
        pGorjeta.innerHTML = "Insira um valor!";

    }else{
        var calculo = Number(10) * Number(valorconta.value)/ 100;
        tGorjeta.innerHTML =  "R$" + calculo.toFixed(2);
        console.log(calculo);
        console.log(valorconta.value);
    
         var porPessoa = (Number(calculo) / Number(pessoas.value));
        pGorjeta.innerHTML = "R$" + porPessoa.toFixed(2);
        console.log(pessoas.value);

    }
})

porcentagem3.addEventListener("click", function(){

    if(valorconta.value == "" || pessoas.value == ""){
        tGorjeta.innerHTML = "Insira um valor!";
        pGorjeta.innerHTML = "Insira um valor!";

    }else{
        var calculo = Number(15) * Number(valorconta.value)/ 100;
        tGorjeta.innerHTML =  "R$" + calculo.toFixed(2);
        console.log(calculo);
        console.log(valorconta.value);
    
         var porPessoa = (Number(calculo) / Number(pessoas.value));
        pGorjeta.innerHTML = "R$" + porPessoa.toFixed(2);
        console.log(pessoas.value);

    }
})

porcentagem4.addEventListener("click", function(){

    if(valorconta.value == "" || pessoas.value == ""){
        tGorjeta.innerHTML = "Insira um valor!";
        pGorjeta.innerHTML = "Insira um valor!";

    }else{
        var calculo = Number(25) * Number(valorconta.value)/ 100;
        tGorjeta.innerHTML =  "R$" + calculo.toFixed(2);
        console.log(calculo);
        console.log(valorconta.value);
    
         var porPessoa = (Number(calculo) / Number(pessoas.value));
        pGorjeta.innerHTML = "R$" + porPessoa.toFixed(2);
        console.log(pessoas.value);

    }
})

porcentagem5.addEventListener("click", function(){

    if(valorconta.value == "" || pessoas.value == ""){
        tGorjeta.innerHTML = "Insira um valor!";
        pGorjeta.innerHTML = "Insira um valor!";

    }else{
        var calculo = Number(50) * Number(valorconta.value)/ 100;
        tGorjeta.innerHTML =  "R$" + calculo.toFixed(2);
        console.log(calculo);
        console.log(valorconta.value);
    
         var porPessoa = (Number(calculo) / Number(pessoas.value));
        pGorjeta.innerHTML = "R$" + porPessoa.toFixed(2) ;
        console.log(pessoas.value);

    }
})

    custom.addEventListener("input", function(){

        if(valorconta.value == "" || pessoas.value == ""){
            tGorjeta.innerHTML = "Insira um valor!";
            pGorjeta.innerHTML = "Insira um valor!";
    
        }else{
            var calculo = parseFloat(Number(custom.value) * Number(valorconta.value)/ 100);
            tGorjeta.innerHTML =  "R$" + calculo.toFixed(2);
            console.log(calculo);
            console.log(valorconta.value);
            console.log(custom.value);
        
             var porPessoa = (Number(calculo) / Number(pessoas.value));
            pGorjeta.innerHTML = "R$" + porPessoa.toFixed(2) ;
            console.log(pessoas.value);
    
        }

    })

 

    function clean(){
        document.getElementById('input-conta').value = "";        
        document.getElementById('custom').value = "";
        document.getElementById('pessoas').value = "1";

        pGorjeta.innerHTML = "R$" + (0).toFixed(2);
        tGorjeta.innerHTML = "R$" + (0).toFixed(2);

    }


 