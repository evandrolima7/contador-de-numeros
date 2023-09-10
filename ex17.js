function contar(){
  var txtprimeiro = document.getElementById('txtinicio')
  var txtultimo = document.getElementById('txtfim')
  var txtsalto = document.getElementById('txtpasso')
  var primeiro = Number(txtprimeiro.value)
  var ultimo = Number(txtultimo.value)
  var salto = Number(txtsalto.value)
  var res = document.getElementById('res')
  if (salto == 0){
    window.alert('Valor invalido: valor 1 considerado pra salto')
    var salto = 1
  }else {
    res.innerHTML += "contando..."
    
  }
  if (primeiro < ultimo){
    //crescente
  while (primeiro <= ultimo){
    res.innerHTML += `👉 ${primeiro} `
    primeiro += salto
  }
  }else if (primeiro > ultimo){
    //decrescente
  while (primeiro >= ultimo){
    res.innerHTML += `👉 ${primeiro} `
    primeiro -= salto
  }
  }
  res.innerHTML += '👉 🏁'
}