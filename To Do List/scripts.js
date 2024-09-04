function adicionarTarefa(){
   let valorDoInput =  document.querySelector("input").value;


    let li = document.createElement('li');
    li.innerHTML = valorDoInput + '<span onClick="deletarTarefa(this)">❌</span>'; // precisa usar aspas simples aqui para não dar erro

    document.querySelector("ul").appendChild(li);
    document.querySelector("input").value = '';

}


function deletarTarefa(li){
    li.parentElement.remove()
}