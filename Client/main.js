//Variaveis Globais
var $balance=document.querySelector("#balance")
var $balance_text=document.querySelector("#balance-text")
var $view_balance=document.querySelector("#view-balance")
var $history=document.querySelector("#history")

var balance=0
var history_transactions=[]
var identification={
    nome:prompt("Seu Nome"),
    token:''
}
var view_balance=true
var users=[]

//Inicializacao
document.querySelector("#nome-profile").value=identification.nome



function addMoney(value){
    balance+=value
    if(view_balance){
        $balance_text.innerHTML=balance + '$'
    }
}
function hideMoney(){
    if(view_balance==true){
        $view_balance.innerHTML='-'
        view_balance=false
        $balance_text.innerHTML='-$'
    }
    else{
        $view_balance.innerHTML='👁'
        view_balance=true
        $balance_text.innerHTML=balance+'$'
    }
    
}
function addHistory(name,value,time){
    history_transactions.unshift({
        name:name,
        value:value,
        time:time
    })
    addMoney(value)
    $history.textContent=''
    for(var i=0;i<history_transactions.length;i++){
        var data=document.createElement("DIV")
        var nome=document.createElement("P")
        var valor=document.createElement("P")
        var hora=document.createElement("P")

        if(history_transactions[i].value<0){
            nome.style.color='red'
            valor.style.color='red'
            hora.style.color='red'
        }
        else{
            nome.style.color='black'
            valor.style.color='black'
            hora.style.color='black'
        }


        nome.innerHTML=history_transactions[i].name
        valor.innerHTML=history_transactions[i].value + '$'
        hora.innerHTML=history_transactions[i].time + 'h'

        data.appendChild(nome)
        data.appendChild(valor)
        data.appendChild(hora)

        $history.appendChild(data)
    }
}

function showProfile(){
    if(document.querySelector("#edit-profile").style.display=='inline-block'){
        document.querySelector("#edit-profile").style.display='none'
    }
    else{
        document.querySelector("#edit-profile").style.display='inline-block'
    }
}
function showHistory(){
    if(document.querySelector("#all-history").style.display=='inline-block'){
        document.querySelector("#all-history").style.display='none'
    }
    else{
        document.querySelector("#all-history").style.display='inline-block'
    }
}


