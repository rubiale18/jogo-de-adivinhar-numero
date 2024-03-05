alert ('Aoba, bão?'); //alert para mostar mensgaem no site
let nmm = 100
let numeros = parseInt(Math.random() * nmm + 1);
//let numeros = parseInt(Math.random() * 100 + 1); // let serve para receber ima str 
let chut
console.log(numeros)
let tent = 1

while (chut != numeros){
    chut = prompt (`Escolha um numero de 1 a ${nmm}: `);
    // sempre usar parenteses no if
    // e abrir {} logo depois
    if (chut == numeros) {
        break;
    } else{
        if (numeros >    chut){
            alert(`seu numero é maior que ${chut}`);
        } else{
            alert(`seu numero é menor que ${chut}`);
        }
     //tent = tent +1
     tent++
    }
}   

let palate = tent > 1 ? 'tentativas' : 'tentativa'
alert(`Boa, você acertou o numero secretp! ${numeros} com ${tent} ${palate}`)


//if (tent > 1){
//    //console é ferramenta para desenvolvimento e não para interação com usuario
//        // para colocar algo dentro do print é com crase e `${}`
//       alert(`Boa, você acertou o numero secretp! ${numeros} com ${tent} vezes`);
//}
//else{
//    alert('vocÊ acertou de primeira')
//}


