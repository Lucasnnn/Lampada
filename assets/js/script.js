function acender(){
const img = document.querySelector("#lampada img");
const botao = document.querySelector("#lampada a")

if( botao.textContent === "ACENDER" ){
    img.src = "./assets/img/acesa.jpg";
    botao.textContent = "APAGAR";
    console.log(botao);
} else{ img.src = "./assets/img/apagada.jpg";
    botao.textContent = "ACENDER";}
}