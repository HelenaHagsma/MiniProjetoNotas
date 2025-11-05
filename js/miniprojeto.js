var cores = 0; /*contador para organizar a padronização de cores */

function adicionar(){ /*adiciona nota */

    var n = document.getElementById("nota").value.trim() /*.value pega o valor inserido e .trim pega o valor sem espaços em branco */
    var urgente = document.getElementById("urgente")
    var naourgente = document.getElementById("naourgente")
    var espacoNU = document.getElementById("espacoNU")
    var espacoNNU = document.getElementById("espacoNNU")


    /*verificações---------------------------*/
    if(n=="" || n==null){
        alert("O campo não pode ficar vazio!")
        return;
    }

   if (urgente.checked==true && naourgente.checked==true) {
        alert("Escolha apenas uma das opções!");
        return;
    }

    else if(urgente.checked==false && naourgente.checked==false){
        alert("Você precisa marcar ao menos uma opção!")
        return;
    }
    /*---------------------------------------- */

 /*adiciona na lista correspondente sem substituir valor*/ 
    if(urgente.checked==true && naourgente.checked==false){
        var li = document.createElement("li");
        li.textContent = n; /*conteúdo da li será a próxima nota do usuário */
    }

    if(naourgente.checked==true && urgente.checked==false){
        var li = document.createElement("li");
        li.textContent = n;
    }
    var li = document.createElement("li");
    li.textContent = n;

    
    cores++; /*nota adicionada --> contador cores +1 */
      var resto = cores % 3; 
    if (resto === 1) {/*lógica --> nota 1/3 = 0, resto=1 */
        li.style.backgroundColor = "#0019fcff";
        li.style.borderRadius="20px"

    } else if (resto === 2) {/*lógica --> nota 2/3 = 0, resto=2 */
        li.style.backgroundColor = "#027a5cff";
        li.style.borderRadius="20px"

    } else { /*lógica --> nota 3/3 = 1, resto=0 */
        li.style.backgroundColor = "#77019bff"; 
        li.style.borderRadius="20px"
    }

    if(urgente.checked){
        espacoNU.appendChild(li);/*appendChild cria um elemento filho(li) no elemento pai(espacoNNU) */
    }
    else{
        espacoNNU.appendChild(li);/*appendChild cria um elemento filho(li) no elemento pai(espacoNNU) */
    }

    /*--------------botão para cada nota */

    var btnApagarNota = document.createElement("button");
    /*-------estilização*/
    btnApagarNota.textContent = "Apagar Nota"; 
    btnApagarNota.style.display = "inline";
    btnApagarNota.style.margin = "20px";
    btnApagarNota.style.float = "right";
    btnApagarNota.style.cursor = "pointer";
    btnApagarNota.style.backgroundColor = "#d4d4d4be";
    btnApagarNota.style.color = "#131313ff";
    btnApagarNota.style.border = "solid #000000 3px";
    btnApagarNota.style.fontWeight = "bold";
    btnApagarNota.style.fontFamily = "Parkinsans; sans-serif";
    btnApagarNota.style.borderRadius = "5px";
    btnApagarNota.style.padding = "2px 6px";

    /*Evento de clique no botão*/
    btnApagarNota.onclick = function() {
        li.remove(); 
    };

    /*Adiciona o botão ao item li*/
    li.appendChild(btnApagarNota);
    
    
    /*Limpa o campo e desmarca os checkboxes*/
    document.getElementById("nota").value = "";
    urgente.checked = false;
    naourgente.checked = false;
}
 /*---------------------------fim da função adicionar()------------------------------- */


function apagarTodas(listaNotas) {
    var lista = document.getElementById(listaNotas); /*listaNotas guarda o espaçoNU ou espaçoNNU, dependendo de qual o usuário clicar */
    if(lista){
        lista.remove(); /*apaga todo o conteúdo do espacoNU ou espacoNNU */
    }
    else{ /*se o usuário não adicionou nenhuma nota mas clicou no botão de apagar todas */
        alert("Não há notas para apagar!")
    }
      }
    