window.onload = function(){

    var botaoAdicionar = document.querySelector("#adicionar-noticia");
    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault();
        
        var form = document.querySelector("#form-adiciona");

        var imagem = form.imagem.value;
        var titulo = form.titulo.value;
        var descricao = form.descricao.value;
        
        var noticiaDiv = document.createElement("div");

        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption")
        var h3 = document.createElement("h3");
        var p = document.createElement("p");

        noticiaDiv.classList.add("col-vids");
        figure.classList.add("foto-noticia");
        img.src = imagem;
        h3.classList.add("cor-primaria");
        h3.textContent = titulo;
        p.classList.add("cor-secundaria");
        p.textContent = descricao;

        figcaption.appendChild(h3);
        figcaption.appendChild(p);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        noticiaDiv.appendChild(figure);

        var tabelaNoticias = document.querySelector(".noticias-grid");
        tabelaNoticias.appendChild(noticiaDiv);

        console.log(noticiaDiv);

    });

};


//
//div class="col-vids">
//  <figure class="foto-noticia">
//   <img src="images/noticiapic1.jpg">
//     <figcaption>
//        <h3 class="cor-primaria">Uma notícia muito interessante.</h3>
//          <p class="cor-secundaria">Este é um acontecimento muito interessante que irá mudar sua vida.</p>
//        </figcaption>
 //  </figure>
// </div>