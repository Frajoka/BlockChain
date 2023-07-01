//Variaveis Globais
var $balance=document.querySelector("#balance")
var $balance_text=document.querySelector("#balance-text")
var $view_balance=document.querySelector("#view-balance")
var $history=document.querySelector("#history")

var balance=0
var history=[]
var identification={
    name:prompt("Seu Nome"),
    token:''
}
var view_balance=true

function addMoney(value){
    balance+=value
    $balance_text.innerHTML=balance + '$'
}
function takeMoney(value){
    balance-=value
    $balance_text.innerHTML=balance + '$'
}


