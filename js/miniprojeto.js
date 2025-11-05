let urgenteAtivo = false;
let corIndex = 0;
const coresBorda = ['#2196F3', '#4CAF50', '#9C27B0']; 

function urgente() {
  urgenteAtivo = true;
  document.getElementById("urgente").style.border = "3px solid black";
  document.getElementById("naoUrgente").style.border = "none";
}

function naoUrgente() {
  urgenteAtivo = false;
  document.getElementById("naoUrgente").style.border = "3px solid black";
  document.getElementById("urgente").style.border = "none";
}

function adicionartexto() {
  const texto = document.getElementById("item").value.trim();
  if (texto === "") {
    alert("Digite uma nota antes de adicionar!");
    return;
  }

  const li = document.createElement("li");
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";
  botaoRemover.className = "removeBtn";
  botaoRemover.onclick = function() {
    li.remove();
  };

  li.appendChild(document.createTextNode(texto));
  li.appendChild(botaoRemover);

  
  li.style.backgroundColor = urgenteAtivo ? "#f44336" : "#fff44f";

 
  li.style.borderLeft = `6px solid ${coresBorda[corIndex % coresBorda.length]}`;
  corIndex++;

 
  if (urgenteAtivo) {
    document.getElementById("listaUrgente").appendChild(li);
  } else {
    document.getElementById("listaNaoUrgente").appendChild(li);
  }

  document.getElementById("item").value = "";
}


function apagarTudo() {
  document.getElementById("listaUrgente").innerHTML = "";
  document.getElementById("listaNaoUrgente").innerHTML = "";
}