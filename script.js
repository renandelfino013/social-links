function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if (html.classList.contains ("light")){
  //
  //  html.classList.remove("light")}
  //else {
  //html.classList.add("light")

  //O CODIGO SO VOLTOU A PEGAR DPS DE COLOCAR LETRA MAIUSCULA NO l DO CLASSLIST PARA SEPARAR O CLASS TEM Q SER MAIUSCULO

 
 

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar.light.png")
  }

  //se tiver light mode , adicionar imagem light
  //se n tiver light, manter a imagem normal
  else {
    img.setAttribute("src", "./assets/renan.png")
  }

  if (html.classList.contains("light"))
    img.setAttribute("alt", "pug branco com olhos esbugalhados")
  else {
    img.setAttribute("alt", "renan de terno e gravata dando um sorriso")
  }
}


