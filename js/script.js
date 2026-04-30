function avaliar(elemento, nota){

  const estrelas = elemento.parentElement.children;

  for(let i = 0; i < estrelas.length; i++){
    if(i < nota){
      estrelas[i].style.color = "gold";
    }else{
      estrelas[i].style.color = "gray";
    }
   
  }
   

}

const form = document.getElementById("formComentario");
const lista = document.getElementById("listaComentarios");


function carregarComentarios() {
  lista.innerHTML = "";
  const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

  comentarios.forEach(c => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${c.nome}</strong><p>${c.texto}</p><hr>`;
    lista.appendChild(div);
  });
}


form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const texto = document.getElementById("comentario").value;

  const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

  comentarios.push({ nome, texto });

  localStorage.setItem("comentarios", JSON.stringify(comentarios));

  form.reset();
  carregarComentarios();
});


carregarComentarios();
