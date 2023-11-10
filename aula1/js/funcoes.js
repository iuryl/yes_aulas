
function somar(n1,n2){
    return n1 + n2;
};

console.log("A soma entre os dois números é " , somar(34,59));

//soma +, sub - , mult * , divi /

function multplicar(n1,n2){
    return n1 * n2;
};
console.log("A mulplição entre os dois números é " , multplicar(35,67));

function subitrair(n1,n2){
    return n1 - n2; 
}; 
console.log("A subtração entre os dois números é " , subitrair(56,44));

function divição(n1,n2){
    return n1 / n2; 
};
console.log("A divição entre os dois números é " , divição(789,999));

function corDosemaforo(cor){

 if(cor === "verde")}
 return("Cor VEDER, você pode sequir em frente");)
 else if("cor === amarelo")}
 return("Cor AMARELA, é recomdavel você esperar,");}
 else if("cor === VERMELHA, ")}
 return("Cor VERMELHA,para imediatamente e espera o sinal verde");
}
 else{
     return("Cor intefina");
 };



//array- lista

let frutas = ["maça", "banana", "uva" , "morango"];
console.log(frutas);

// ADICIONADO UM ITEM NA LISTA. USAMOS push();
frutas. push("laranja");
console.log(frutas);

//ADICINADO UM ITAM NA LISTA  AO INÍCIO. USAMOS unshifit();
frutas.unshift("pera");
console.log(frutas);

// REMOVENDO UM ITEM NA LISTA. USMOS pop();
frutas.pop();
console.log(frutas);

// REMOVEMDO UM ITEM NA LISTA NO INÍCIO. USAMOS shift();
frutas.shift();
console.log(frutas);

//DESCOBRIDO QUAL A POSIÇÃO DE UM ITEM NO NO  IDICE 
let indice = frutas. indexOf  
